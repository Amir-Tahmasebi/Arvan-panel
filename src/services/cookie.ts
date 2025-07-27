import {
    setCookie as _setCookie,
    deleteCookie as _deleteCookie,
    getCookie as _getCookie,
} from 'cookies-next'

import type {
    CookieValueTypes,
    OptionsType
} from 'cookies-next'

export const set = (key: string, value: CookieValueTypes, options: OptionsType = {}) => {
    _setCookie(key, value, {
        maxAge: 60 * 60 * 24 * 7,
        path: '/',
        ...options
    })
}

export const remove = (key: string, options: OptionsType = {}) => {
    _deleteCookie(key, { path: '/', ...options })
}

export const get = (key: string, options: OptionsType = {}) => _getCookie(key, options)
