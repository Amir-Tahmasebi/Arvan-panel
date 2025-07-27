"use client";

import { useEffect } from "react";

import { useArticlesStore } from "@/store";
import { Props } from "./";

export default function HydratePosts({ articles, meta }: Props) {
  const { setArticles, setMeta } = useArticlesStore();

  useEffect(() => {
    setArticles(articles);
    setMeta(meta);
  }, [articles, meta]);

  return null;
}
