/** @type {import('next').NextConfig} */
const nextConfig = {
    eslint: {
        ignoreDuringBuilds: true,
    },
    images: {
        domains: [
            "images.pexels.com",
            "img.freepik.com",
            "avatars.githubusercontent.com",
            "lh3.googleusercontent.com",
        ]
    }
}

module.exports = nextConfig
