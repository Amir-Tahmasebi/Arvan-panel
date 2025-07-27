import { IMeta } from "@/types"

export interface IArticle {
    id: string
    title: string
    content: string,
    author: string,
    tags: string[]
    created_at: string
}

export type FetchArticlesResponseType = {
    meta: IMeta,
    articles: IArticle[]
}
export interface AddArticlePayload  {
    title: string
    description: string
    body: string
}

export interface UpdateArticlePayload extends AddArticlePayload {
    id: string
}