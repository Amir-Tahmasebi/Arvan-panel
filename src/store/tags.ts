import { create } from 'zustand';

interface TagsState {
    tags: string[];
    setTags: (tags: string[]) => void
}

export const useTagsStore = create<TagsState>((set) => ({
    tags: [],
    setTags: (tags) => set({ tags }),
}));