import { API_ENDPOINTS } from "@/config";
import { client } from "@/services";
import { IResponse } from "@/types";

export const fetchTags = async () => await client.get<IResponse<{ tags: string[] }>>(API_ENDPOINTS.TAGS.INDEX, {
    cache: 'no-store'
})

export const addNewTag = async (tag: string) => await client.post<IResponse<{ tags: string[] }>, { tag: string }>(API_ENDPOINTS.TAGS.INDEX, { tag })