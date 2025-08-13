/* eslint-disable */

"use client";

import { useState } from "react";

export default function PDFUploader() {
  const [file, setFile] = useState<File | null>(null);
  const [loading, setLoading] = useState(false);
  const [roast, setRoast] = useState<string | null>(null);

  async function handleUpload() {
    if (!file) return alert("Upload a PDF first!");

    setLoading(true);
    setRoast(null);

    const base64PDF = await fileToBase64(file);

    try {
      const res = await fetch("/api/roast", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ base64PDF }),
      });

      const data = await res.json();
      if (data.error) throw new Error(data.error);
      setRoast(data.roast);
    } catch (err: any) {
      setRoast(`Error: ${err.message}`);
    } finally {
      setLoading(false);
    }
  }

  function fileToBase64(file: File): Promise<string> {
    return new Promise((resolve, reject) => {
      const reader = new FileReader();
      reader.onload = () => {
        const result = reader.result as string;
        resolve(result);
      };
      reader.onerror = reject;
      reader.readAsDataURL(file);
    });
  }

  return (
    <div className="bg-gradient-to-br from-[#1A002B] via-[#3C005A] to-[#FF006E] min-h-screen flex flex-col items-center justify-center text-white p-6">
      <h1 className="text-5xl font-extrabold mb-6">🔥 Roast My Resume 🔥</h1>

      <div className="bg-white/10 p-6 rounded-2xl shadow-lg w-full max-w-lg">
        <input
          type="file"
          accept="application/pdf"
          onChange={(e) => setFile(e.target.files?.[0] || null)}
          className="block w-full text-sm text-white file:mr-4 file:py-2 file:px-4
                     file:rounded-full file:border-0 file:text-sm file:font-semibold
                     file:bg-pink-500 file:text-white hover:file:bg-pink-600 mb-4"
        />

        <button
          onClick={handleUpload}
          disabled={!file || loading}
          className="w-full py-3 bg-yellow-400 text-black font-bold rounded-xl hover:bg-yellow-300 transition disabled:opacity-50"
        >
          {loading ? "Roasting..." : "🔥 Roast it"}
        </button>
      </div>

      {roast && (
        <div className="mt-6 bg-black/30 p-6 rounded-xl w-full max-w-3xl text-lg whitespace-pre-wrap">
          {roast}
        </div>
      )}
    </div>
  );
}
