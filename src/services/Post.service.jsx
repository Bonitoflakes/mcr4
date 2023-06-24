export const handleUpVote = (postId) => {
  return {
    type: "upvote_post",
    payload: { postId },
  };
};

export const handleDownVote = (postId) => {
  return {
    type: "downvote_post",
    payload: { postId },
  };
};

export const handleBoomark = (postId) => {
  return {
    type: "toggle_bookmark",
    payload: { postId },
  };
};

