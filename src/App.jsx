import { Routes } from "react-router-dom";
import { Tweet } from "./components/Tweet";
import { useForum } from "./hooks/useForum";
import { AppLayout } from "./pages/AppLayout";
import { Route } from "react-router-dom";
import { BiArrowBack } from "react-icons/bi";
import { useNavigate } from "react-router-dom";
import { useParams } from "react-router-dom";
import { useState } from "react";
import { useEffect } from "react";

export default function App() {
  return (
    <div className="min-h-[100dvh] bg-purple-300">
      <AppLayout>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/tweet/:tweetId" element={<Post />} />
        </Routes>
      </AppLayout>
    </div>
  );
}

export const Home = () => {
  const { posts } = useForum();

  return (
    <>
      <h1 className="mb-8 text-5xl font-bold text-purple-950">Latest Posts</h1>
      {posts.map((post) => (
        <Tweet post={post} key={post.postId} />
      ))}
    </>
  );
};

export const Post = () => {
  const navigate = useNavigate();
  const { tweetId } = useParams();
  const { state } = useForum();

  const getSinglePost = (id) => {
    const post = state.posts.find(({ postId }) => postId === id);
    return post;
  };

  const data = getSinglePost(tweetId);

  return (
    <div>
      <div className="flex items-center gap-4 mb-8 post-nav">
        <button onClick={() => navigate("/")}>
          <BiArrowBack fontSize={30} color="black" />
        </button>
        <h1 className="text-5xl font-bold text-purple-950">Post</h1>
      </div>

      <Tweet post={data} showComments />
    </div>
  );
};
