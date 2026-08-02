"use client";

import { useRegionVariant } from "@/components/region-provider";
import Markdown from "react-markdown";

interface RegionAwareMarkdownProps {
  europeMarkdown: string;
  americasMarkdown: string;
}

export default function RegionAwareMarkdown({
  europeMarkdown,
  americasMarkdown,
}: RegionAwareMarkdownProps) {
  const { region } = useRegionVariant();
  const markdown = region === "americas" ? americasMarkdown : europeMarkdown;

  return <Markdown>{markdown}</Markdown>;
}