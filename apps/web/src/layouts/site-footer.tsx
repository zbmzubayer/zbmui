import Link from "next/link";

import { SiteLogo } from "@/layouts/site-logo";

export function SiteFooter() {
  return (
    <footer className="flex items-end justify-between">
      <div>
        <SiteLogo />
        <p className="text-muted-foreground text-sm">
          Built by the{" "}
          <Link
            href="https://zubayer.dev"
            target="_blank"
            rel="me noopener noreferrer"
            className="underline underline-offset-4 hover:text-primary"
          >
            ZBM
          </Link>
          .
        </p>
      </div>
      <p className="text-muted-foreground text-sm">
        © {new Date().getFullYear()} ZBM ui. All rights reserved.
      </p>
    </footer>
  );
}
