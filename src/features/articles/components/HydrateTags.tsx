"use client";

import { useEffect } from "react";

import { useTagsStore } from "@/store";

export default function HydrateTags({ tags }: { tags: string[] }) {
  const { setTags } = useTagsStore();

  useEffect(() => {
    setTags(tags);
  }, []);

  return null;
}
