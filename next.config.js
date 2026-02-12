/** @type {import('next').NextConfig} */
const nextConfig = {
    images: {
        remotePatterns: [
            {
                protocol: 'https',
                hostname: 'www.theaudiodb.com',
            },
        ],
    },
};

export default nextConfig;
