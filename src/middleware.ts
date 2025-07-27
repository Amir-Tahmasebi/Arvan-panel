import { NextResponse } from 'next/server'
import type { NextRequest } from 'next/server'

import { APP_ROUTES } from '@/config'

const matcher = ['/((?!_next|favicon.ico|.*\\.(?:js|css|png|jpg|jpeg|svg|woff2?)$).*)']

export function middleware(request: NextRequest) {
    const token = request.cookies.get(process.env.NEXT_PUBLIC_TOKEN_KEY as string)?.value
    const { pathname } = request.nextUrl

    const publicPaths = [APP_ROUTES.AUTH.SIGN_IN, APP_ROUTES.AUTH.SIGN_UP,]
    const isApiRoute = pathname.startsWith('/api')

    if (
        isApiRoute ||
        publicPaths.includes(pathname) ||
        pathname.startsWith('/_next') ||
        pathname.match(/\.(js|css|png|jpg|svg|woff2?)$/)
    ) {
        return NextResponse.next()
    }

    if (!token) {
        return NextResponse.redirect(new URL(APP_ROUTES.AUTH.SIGN_IN, request.url))
    }

    return NextResponse.next()
}

export const config = {
    matcher
}
