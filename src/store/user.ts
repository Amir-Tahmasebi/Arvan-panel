import { IUser } from '@/types';
import { create } from 'zustand';



interface UserState {
    user: IUser
    setUser: (user: IUser) => void
}

export const useUserStore = create<UserState>((set) => ({
    user: {} as IUser,
    setUser(user) {
        set({ user })
    },
}));