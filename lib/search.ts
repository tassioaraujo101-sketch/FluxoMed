import { flowcharts } from "@/data/flowcharts";

export const findFlowchartByQuery = (query: string, specialty?: string) => {
  const normalizedQuery = query.toLowerCase().trim();
  const filtered = specialty
    ? flowcharts.filter((item) => item.specialty.toLowerCase() === specialty.toLowerCase())
    : flowcharts;

  return filtered.find(
    (item) =>
      item.title.toLowerCase().includes(normalizedQuery) ||
      item.searchTags.some((tag) => normalizedQuery.includes(tag) || tag.includes(normalizedQuery))
  );
};
