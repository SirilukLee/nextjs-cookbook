/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  styledComponents: true,
  // pageExtensions: ['page.tsx', 'page.ts', 'page.jsx', 'page.js', 'api.ts', 'api.js' ],
  // locales:['en', 'de'],
  // defaultLocale: 'en',
  // webpack: (config, { buildld, dev, isServer, defaultLoaders, webpack }) => {
  //   if (dev) {
  //     console.log('Is development flow', process.env.SECRET) // this line will fire twice because webpack function
  //     // is runs for server and client separately
  //   }
  //   return config // do not forget to return this object 
  // },
  env: {
    SECRET: process.env.SECRET
  }
};

export default nextConfig;
