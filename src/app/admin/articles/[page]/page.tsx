import { APP_ROUTES } from "@/config";
import { Articles } from "@/features";
import { fetchArticles } from "@/lib";
import { redirect } from "next/navigation";
export const dynamicParams = true;
export default async function ArticlePage({
  params,
}: {
  params: { page: string };
}) {
  const pageNumber = Number(await params?.page);

  if (isNaN(pageNumber) || pageNumber < 1) {
    redirect(`${APP_ROUTES.ADMIN.ARTICLES.INDEX}/1`);
  }

  const response = await fetchArticles(pageNumber);

  return (
    <>
      <Articles.AllHydrate {...response.data} />
      <Articles.All />
    </>
  );
}
