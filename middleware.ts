import { NextResponse } from 'next/server'
import type { NextRequest } from 'next/server'

export function middleware(request: NextRequest) {
    if(request.url.includes('status=SUCCESS')) return;

    return NextResponse.redirect(new URL(`${request.url}/?status=SUCCESS`))
}

// See "Matching Paths" below to learn more
export const config = {
    matcher: '/feature/middleware',
}