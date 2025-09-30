import Header from "@/components/layout/Header";

const Posts: React.FC = () => {
  return (
    <div>
      <Header />
      <main className="p-6">
        <h1 className="text-3xl font-bold">Posts Page</h1>
        <p className="mt-2">Here is where all posts will be listed.</p>
      </main>
    </div>
  );
};

export default Posts;
