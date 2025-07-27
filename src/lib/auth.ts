import { API_ENDPOINTS } from "@/config";
import { client } from "@/services";
import { IResponse, LoginPayloadType, LoginResponseType, RegisterPayloadType } from "@/types";

export const login = async (body: LoginPayloadType) => await client.post<IResponse<LoginResponseType>, LoginPayloadType>(API_ENDPOINTS.AUTH.LOGIN, body)
export const registerUser = async (body: RegisterPayloadType) => await client.post<IResponse, RegisterPayloadType>(API_ENDPOINTS.AUTH.REGISTER, body)