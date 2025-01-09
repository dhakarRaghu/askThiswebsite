"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";

export default function HomePage() {
    const [url, setUrl] = useState("");
    const router = useRouter();

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        if (!url) {
            alert("Please enter a URL.");
            return;
        }
        router.push(`/chat?url=${encodeURIComponent(url)}`);
    };

    return (
        <div className="flex items-center justify-center h-screen bg-zinc-900">
            <form onSubmit={handleSubmit} className="p-6 bg-zinc-800 rounded-lg shadow-md">
                <h1 className="text-2xl font-bold mb-4">Enter a URL</h1>
                <input
                    type="text"
                    value={url}
                    onChange={(e) => setUrl(e.target.value)}
                    placeholder="https://example.com"
                    className="w-full p-2 rounded border bg-zinc-900 text-white mb-4"
                />
                <button
                    type="submit"
                    className="w-full bg-blue-600 text-white py-2 rounded hover:bg-blue-700"
                >
                    Start Chat
                </button>
            </form>
        </div>
    );
}
