import { API_ENDPOINTS } from "@/config";
import { client } from "@/services";
import { AddArticlePayload, FetchArticlesResponseType, IResponse, IArticle, UpdateArticlePayload } from "@/types";



export const fetchArticles = async (page?: number) =>
    await client.get<IResponse<FetchArticlesResponseType>>(`${API_ENDPOINTS.ARTICLES.INDEX}?page=${page || 1}`,
        {
            cache: 'no-store'
        })


export const addNewArticle = async (body: AddArticlePayload) => {
    console.log(API_ENDPOINTS.ARTICLES.INDEX);

    return await client.post<IResponse<unknown>, AddArticlePayload>(API_ENDPOINTS.ARTICLES.INDEX, body)
}

export const fetchArticlesById = async (id: string) => await client.get<IResponse<{ article: IArticle }>>(API_ENDPOINTS.ARTICLES.ARTICLE_BY_ID.replace(':id', id), {
    cache: 'no-store'
})

export const updatedArticleById = async (payload: UpdateArticlePayload) => {
    const { id, ...body } = payload
    return await client.put<IResponse<unknown>, AddArticlePayload>(API_ENDPOINTS.ARTICLES.ARTICLE_BY_ID.replace(':id', id), body)
}

export const removeArticleById = async (id: string) => await client.delete<IResponse>(API_ENDPOINTS.ARTICLES.ARTICLE_BY_ID.replace(':id', id))