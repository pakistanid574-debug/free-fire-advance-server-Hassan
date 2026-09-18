import { NextResponse } from 'next/server';

export function middleware(request) {
  // Vercel incoming request se country code extract karta ha
  const country = request.geo?.country || '';

  // Agar visitor Pakistan ('PK') se ha, toh request block kar do
  if (country === 'PK') {
    return new NextResponse('Access Denied: This service is not available in your region.', {
      status: 403,
      headers: { 'content-type': 'text/plain' },
    });
  }

  return NextResponse.next();
}

// Config: Sabhi pages par ye middleware run hoga
export const config = {
  matcher: '/:path*',
};

