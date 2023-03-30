/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
  env: {
    API_URL: 'https://sagor-konna.herokuapp.com',
    token:
      'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjYzNDg1OGEyYjFjZjQ0NDY4YTg1M2FiNiIsImlhdCI6MTY2NTY5MjU0OSwiZXhwIjoxNjY4Mjg0NTQ5fQ.A2SLh2wfixOGdEhndaz4YAvGTMtKLdyXUPdSJosBib8',
  },
};

module.exports = nextConfig;
