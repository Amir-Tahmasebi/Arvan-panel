import { APP_ROUTES } from "@/config"

type Link = {
    name: string
    href: string
}

export const links: Link[] = [
    {
        name: 'All Articles',
        href: APP_ROUTES.ADMIN.ARTICLES.INDEX
    },
    {
        name: 'New Article',
        href: APP_ROUTES.ADMIN.ARTICLES.CREATE 
    },
]