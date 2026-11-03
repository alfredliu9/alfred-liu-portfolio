import type { NextConfig } from 'next';

const nextConfig: NextConfig = {
  async headers() {
    return [
      {
        source: '/alfred-liu-resume.pdf',
        headers: [
          {
            key: 'Content-Disposition',
            value: 'inline; filename="Alfred-Liu-Resume.pdf"',
          },
        ],
      },
    ];
  },
};

export default nextConfig;
