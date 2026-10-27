import { type NextRequest, NextResponse } from "next/server";

import { processMdxForLLMs } from "@/lib/llm";
import { source } from "@/lib/source";

export async function GET(
  _request: NextRequest,
  { params }: { params: Promise<{ slug: string[] }> }
) {
  const { slug } = await params;
  const page = source.getPage(slug.slice(1));

  if (!page) {
    return NextResponse.json({ error: "File not found" }, { status: 404 });
  }

  const rawContent = await page.data.getText("raw");
  const processedContent = processMdxForLLMs(rawContent);

  return new NextResponse(processedContent, {
    headers: {
      "Content-Type": "text/markdown; charset=utf-8",
      // Let Vercel's edge CDN cache the markdown per URL (24h): any instance,
      // any region serves repeats without hitting the function. s-maxage and
      // stale-while-revalidate are stripped from the browser response by
      // Vercel (no CDN-Cache-Control header), so only the CDN caches. Deploys
      // invalidate the CDN cache, so content never goes stale.
      "Cache-Control": "s-maxage=86400, stale-while-revalidate=86400",
    },
  });
}
