/** @type {import('next').NextConfig} */
const nextConfig = {
    images: {
        remotePatterns: [
            {
                protocol: 'http',
                hostname: 'mars.jpl.nasa.gov',
                port: '',
            },
            {
                protocol: 'http',
                hostname: 'mars.nasa.gov',
                port: '',
            },
        ],
    },
}

module.exports = nextConfig
