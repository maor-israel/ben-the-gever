/** @type {import('next').NextConfig} */
const nextConfig = {
    swcMinify: true,
    reactStrictMode: false,
    experimental: {
        serverMinification: false,
    },
    images: {
        remotePatterns: [
            {
                protocol: 'https',
                hostname: 'dl.airtable.com',
                pathname: '/.attachments/**',
            },
            {
                protocol: 'https',
                hostname: 'v5.airtableusercontent.com',
                pathname: '/**',
            },
            {
                protocol: 'https',
                hostname: 'picsum.photos',
                pathname: '/**',
            },
        ],
    },
};

export default nextConfig;
