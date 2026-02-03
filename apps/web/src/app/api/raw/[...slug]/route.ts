import { type NextRequest, NextResponse } from "next/server";

import { processMdxForLLMs } from "@/lib/llm";
import { source } from "@/lib/source";

export async function GET(
  _request: NextRequest,
  { params }: { params: Promise<{ slug: string[] }> }
) {
  const { slug } = await params;
  console.log("slug", slug);
  const page = source.getPage(slug.slice(1));

  if (!page) {
    return NextResponse.json({ error: "File not found" }, { status: 404 });
  }

  const rawContent = await page.data.getText("raw");
  const processedContent = processMdxForLLMs(rawContent);

  return new NextResponse(processedContent, {
    headers: {
      "Content-Type": "text/markdown; charset=utf-8",
    },
  });
}
