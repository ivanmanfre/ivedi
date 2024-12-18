import { Card } from "../../components/ui/card"; // Changed from @/components

const posts = [
  {
    title: "First Blog Post",
    description: "Description of your first blog post",
    date: "2024-12-17",
    slug: "first-post",
  },
];

export default function BlogPage() {
  return (
    <div className="container mx-auto py-8">
      <h1 className="text-2xl font-bold mb-6">Blog</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {posts.map((post) => (
          <Card key={post.slug} className="p-6">
            <h2 className="text-xl font-bold text-green-500">{post.title}</h2>
            <p className="mt-2">{post.description}</p>
            <p className="text-sm text-gray-500 mt-2">{post.date}</p>
          </Card>
        ))}
      </div>
    </div>
  );
}
