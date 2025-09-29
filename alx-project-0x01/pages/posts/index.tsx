import PostCard from "../../components/common/PostCard";

const PostsPage: React.FC = () => {
  return (
    <div className="p-8">
      <h1 className="text-3xl font-semibold mb-4">Posts</h1>
      <PostCard title="Sample Post" body="This is a placeholder post." />
    </div>
  );
};

export default PostsPage;
