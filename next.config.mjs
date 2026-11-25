/** @type {import('next').NextConfig} */
const nextConfig = {
  async headers() {
    return [
      {
        // The CV is linked from the page but kept out of search results: it carries a phone number.
        source: "/cv/:file*",
        headers: [{ key: "X-Robots-Tag", value: "noindex" }],
      },
    ];
  },
};

export default nextConfig;
