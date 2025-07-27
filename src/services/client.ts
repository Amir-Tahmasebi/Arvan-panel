import { HttpMethods } from '@/types'
import { CookieService } from '@/services'


class Client {
    private baseUrl: string = process.env.NEXT_PUBLIC_API_BASE_URL as string;
    private defaultHeaders: HeadersInit = { 'Content-Type': 'application/json' };

    constructor() {
    }



    private async request<ResponseType, RequestBodyType = unknown>(
        method: HttpMethods,
        url: string,
        body?: RequestBodyType,
        options: RequestInit = {}
    ): Promise<ResponseType> {
        const token = CookieService.get('token')

        const headers: HeadersInit = {
            ...this.defaultHeaders,
            ...(token && { Authorization: `Bearer ${token}` }),
            ...(options.headers || {}),
        }

        const res = await fetch(`${this.baseUrl}${url}`, {
            method,
            headers,
            body: body ? JSON.stringify(body) : undefined,
            ...options,
            next: options.next,
        })

        if (!res.ok) {
            throw new Error(`Request failed: ${res.status} ${res.statusText}`)
        }

        return res.json() as Promise<ResponseType>
    }

    get<ResponseType>(endpoint: string, options?: RequestInit) {
        return this.request<ResponseType>(HttpMethods.get, endpoint, undefined, options)
    }

    post<ResponseType, RequestBodyType = unknown>(
        endpoint: string,
        body: RequestBodyType,
        options?: RequestInit
    ) {

        console.log({ endpoint });

        return this.request<ResponseType, RequestBodyType>(HttpMethods.post, endpoint, body, options)
    }

    put<ResponseType, RequestBodyType = unknown>(
        endpoint: string,
        body: RequestBodyType,
        options?: RequestInit
    ) {
        return this.request<ResponseType, RequestBodyType>(HttpMethods.put, endpoint, body, options)
    }

    delete<ResponseType>(endpoint: string, options?: RequestInit) {
        return this.request<ResponseType>(HttpMethods.delete, endpoint, undefined, options)
    }
}

export const client = new Client();