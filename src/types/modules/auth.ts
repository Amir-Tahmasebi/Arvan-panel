import { IUser } from "@/types";

export interface LoginPayloadType {
    email: string;
    password: string
}

export interface LoginResponseType {
    token: string;
    user: IUser
}

export interface RegisterPayloadType extends LoginPayloadType {
    username: string
} 