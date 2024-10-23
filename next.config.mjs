import createNextIntlPlugin from 'next-intl/plugin';
 
const withNextIntl = createNextIntlPlugin();
 
/** @type {import('next').NextConfig} */
const nextConfig = {
    webpack: (config) => {
        config.ignoreWarnings = [/webpack\.cache\.PackFileCacheStrategy\/webpack\.FileSystemInfo/];
        return config;
      },
};
 
export default withNextIntl(nextConfig);