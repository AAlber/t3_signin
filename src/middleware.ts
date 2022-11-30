import { getToken } from 'next-auth/jwt';
import { NextRequest, NextResponse } from 'next/server';

export default async function middleware(request:NextRequest) {
    const url = request.nextUrl.clone()
    url.pathname = '/signin'
    const session = await getToken({ req: request, secret: process.env.NEXTAUTH_SECRET });

    if(!session) return NextResponse.redirect(url);
    return NextResponse.next();
}

export const config = {
    matcher: '/protected',
}
  