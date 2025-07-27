import { Articles } from "@/features";
import { fetchTags } from "@/lib/admin/tags";

const NewArticle = async () => {
  const response = await fetchTags();

  return (
    <>
      <Articles.HydrateTags tags={response.data.tags} />
      <Articles.NewArticle />
    </>
  );
};

export default NewArticle;
