// app/blog/page.js (or pages/blog.js)

import BlogListSection from "./components/BlogListSection";
// (or "../components/BlogListSection" if using Pages Router and placing it generally)

export default function BlogPage() {
  return (
    <>
      <BlogListSection />
    </>
  );
}
