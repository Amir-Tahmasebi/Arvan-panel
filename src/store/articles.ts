import { IArticle, IMeta } from '@/types';
import { create } from 'zustand';

interface ArticleState {
  articles: IArticle[];
  setArticles: (articles: IArticle[]) => void;
  meta: IMeta
  setMeta: (meta: IMeta) => void
  removeArticle: (id: string) => void
}

export const useArticlesStore = create<ArticleState>((set) => ({
  articles: [],
  meta: {} as IMeta,
  setArticles: (articles) => set({ articles }),
  removeArticle: (id) => {
    set((state) => ({
      articles: state.articles.filter((article) => article.id !== id),
    }));
  },
  setMeta: (meta) => set({ meta }),
}));