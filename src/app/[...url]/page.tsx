import { ChatWrapper } from "@/components/ChatWrapper";
import { ragChat } from "@/lib/rag-chat";
import{ redis} from "@/lib/redis";

interface PageProps {
    params: {
        url: string | string[] | undefined;
    }
}

function reconstructUrl({url} : {url: string[]}) {
    const de = url.map((u) => decodeURIComponent(u));
    return de.join("/");
}

const Page = async ({params} : PageProps) => {

    const reconstructedUrl = reconstructUrl({url :params.url as string[]});
    // console.log(reconstructedUrl);
    const isAlready = await redis.sismember("indexed_urls", reconstructedUrl);

    const sessionId = "mock-session"

   if(!isAlready) {
    await ragChat.context.add({
        type: "html",
        source : reconstructedUrl,
        config: { chunkOverlap : 100 , chunkSize : 1000}, 
    });

    await redis.sadd("indexed_urls", reconstructedUrl);

   }
    return <ChatWrapper sessionId={sessionId} />;
}

export default Page;
