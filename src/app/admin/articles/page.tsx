import { Articles } from "@/features";
import { fetchArticles } from "@/lib";

export default async function ArticlePage() {
  const response = await fetchArticles();

  return (
    <>
      <Articles.AllHydrate {...response.data} />
      <Articles.All />
    </>
  );
}
