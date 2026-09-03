/** @type {import('next').NextConfig} */
const nextConfig = {
    // Necessario para o styled-components funcionar no App Router com SSR.
    compiler: {
        styledComponents: true,
    },
};

export default nextConfig;
