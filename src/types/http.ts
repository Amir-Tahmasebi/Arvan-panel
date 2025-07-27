export enum HttpMethods {
    get = 'GET',
    post = 'POST',
    delete = 'DELETE',
    put = 'PUT',
    patch = 'PATCH',
}

export interface IMeta {
    page: number
    limit: number
    total: number
    totalPages: number
}

export interface IResponse<T = unknown> {
    success: boolean;
    message?:string
    data: T
}