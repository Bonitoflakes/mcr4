export const initialState = {
  accountID: "",
  username: "",
  name: "",
  picUrl: "",
  posts: [],
};

export const ForumReducer = (state, { type, payload }) => {
  switch (type) {
    case "fetch_posts":
      return { ...state, ...payload };

    case "upvote_post": {
      console.log(`Upvoting ${payload.postId}`);

      return {
        ...state,
        posts: state.posts.map((post) => {
          return post.postId === payload.postId ? { ...post, upvotes: post.upvotes + 1 } : post;
        }),
      };
    }

    case "downvote_post": {
      console.log(`Downvoting ${payload.postId}`);

      return {
        ...state,
        posts: state.posts.map((post) => {
          return post.postId === payload.postId ? { ...post, downvotes: post.downvotes + 1 } : post;
        }),
      };
    }

    case "toggle_bookmark": {
      console.log(`Bookmarking ${payload.postId}`);

      return {
        ...state,
        posts: state.posts.map((post) => {
          return post.postId === payload.postId ? { ...post, isBookmarked: !post.isBookmarked } : post;
        }),
      };
    }

    default:
      throw new Error(`Unhandled action type: ${type}`);
  }
};
