import { Articles } from "@/features";
import { fetchArticlesById, fetchTags } from "@/lib";

const page = async ({ params }: { params: { slug: string } }) => {
  const response = await fetchTags();
  const article = await fetchArticlesById(params.slug);
  return (
    <>
      <Articles.HydrateTags tags={response.data.tags} />
      <Articles.editArticle article={article.data.article} />
    </>
  );
};

export default page;
