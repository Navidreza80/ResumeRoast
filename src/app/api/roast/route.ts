/* eslint-disable */

import { NextResponse } from "next/server";

export async function POST(req: Request) {
  try {
    const { base64PDF } = await req.json();

    const response = await fetch(
      "https://openrouter.ai/api/v1/chat/completions",
      {
        method: "POST",
        headers: {
          Authorization: `Bearer ${process.env.NEXT_PUBLIC_OPENROUTER_API_KEY}`,
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          model: "mistralai/mistral-small-3.2-24b-instruct:free",
          messages: [
            {
              role: "user",
              content: [
                {
                  type: "text",
                  text: "Roast this CV brutally and give improvements:",
                },
                {
                  type: "file",
                  file: { filename: "resume.pdf", file_data: base64PDF },
                },
              ],
            },
          ],
          plugins: [{ id: "file-parser", pdf: { engine: "mistral-ocr" } }],
        }),
      }
    );

    const data = await response.json();

    return NextResponse.json({
      roast: data?.choices?.[0]?.message?.content || "No roast found.",
    });
  } catch (err: any) {
    return NextResponse.json({ error: err.message }, { status: 500 });
  }
}
