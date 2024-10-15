/** @type {import('next').NextConfig} */

const prefix = process.env.NODE_ENV === 'production' ? 'https://sodlfmf.github.io/gitServerpage/' : ''

const nextConfig = {
  output:'export',
  assetPrefix: prefix,  
  images: {
    dangerouslyAllowSVG: true,
    contentSecurityPolicy: "default-src 'self'; img-src 'self' data: https:;",
  },
};

export default nextConfig;
