import { useEffect } from "react";

interface SeoProps {
  title: string;
  description: string;
  canonical: string; // path like "/about"
  keywords?: string;
  ogImage?: string;
  ogType?: "website" | "article";
}

const SITE = "https://kheloo24betting.live";
const SITE_NAME = "Khelo24Bet";
const DEFAULT_OG_IMAGE = `${SITE}/og-image.jpg`;

export function useSeo({ title, description, canonical, keywords, ogImage, ogType = "website" }: SeoProps) {
  useEffect(() => {
    document.title = title;

    const setMeta = (attr: string, key: string, content: string) => {
      let el = document.querySelector(`meta[${attr}="${key}"]`);
      if (!el) {
        el = document.createElement("meta");
        el.setAttribute(attr, key);
        document.head.appendChild(el);
      }
      el.setAttribute("content", content);
    };

    setMeta("name", "description", description);
    if (keywords) setMeta("name", "keywords", keywords);

    let canon = document.querySelector('link[rel="canonical"]') as HTMLLinkElement | null;
    if (!canon) {
      canon = document.createElement("link");
      canon.setAttribute("rel", "canonical");
      document.head.appendChild(canon);
    }
    canon.setAttribute("href", SITE + canonical);

    // Resolve og:image to absolute URL
    let img = ogImage || DEFAULT_OG_IMAGE;
    if (img.startsWith("/")) img = SITE + img;

    setMeta("property", "og:title", title);
    setMeta("property", "og:description", description);
    setMeta("property", "og:url", SITE + canonical);
    setMeta("property", "og:image", img);
    setMeta("property", "og:type", ogType);
    setMeta("property", "og:site_name", SITE_NAME);
    setMeta("property", "og:locale", "en_IN");

    setMeta("name", "twitter:card", "summary_large_image");
    setMeta("name", "twitter:title", title);
    setMeta("name", "twitter:description", description);
    setMeta("name", "twitter:image", img);
  }, [title, description, canonical, keywords, ogImage, ogType]);
}
