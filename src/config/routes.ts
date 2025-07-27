export const API_ENDPOINTS = {
    AUTH: {
        LOGIN: "/auth/login",
        REGISTER: "/auth/register",
    },
    ARTICLES: {
        INDEX: '/articles',
        ARTICLE_BY_ID: '/articles/:id'
    },
    TAGS: {
        INDEX: "/tags",

    }
}
export const APP_ROUTES = {
    AUTH: {
        SIGN_IN: '/auth/sign-in',
        SIGN_UP: '/auth/sign-up',
    },
    ADMIN: {
        ARTICLES: {
            INDEX: '/admin/articles',
            CREATE: "/admin/new-article",
            EDIT: '/admin/articles/edit/:slug'
        }
    }
}