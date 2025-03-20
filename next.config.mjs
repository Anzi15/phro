/** @type {import('postcss-load-config').Config} */
const config = {
    plugins: {
      tailwindcss: {},
    },
    images: {
      remotePatterns: [
        {
          protocol: "https",
          hostname: "**",
        },
      ],
    },
  };
  
  export default config;
  