/* eslint-disable react/prop-types */

import {
  BiDownArrow,
  BiUpArrow,
  BiCommentDetail,
  BiShareAlt,
  BiSolidBookmark,
  BiBookmark,
  BiHeart,
} from "react-icons/bi";
import { handleBoomark, handleDownVote, handleUpVote } from "../services/Post.service";
import { useForum } from "./../hooks/useForum";
import { useNavigate } from "react-router-dom";

export const Tweet = (props) => {
  const {
    username,
    picUrl,
    post,
    postDescription,
    upvotes,
    downvotes,
    tags,
    postId,
    isBookmarked,
    comments,
  } = props.post;

  console.log(tags, "tags");
  console.log(comments, "comments");
  console.table(props);

  const votesCount = upvotes - downvotes;
  const { dispatch } = useForum();
  const navigate = useNavigate();

  return (
    <div className="flex flex-col gap-8 p-8 mb-12 rounded-md bg-slate-950">
      <section className="flex gap-4 tweet">
        <div className="flex flex-col items-center votes">
          <button onClick={() => dispatch(handleUpVote(postId))}>
            <BiUpArrow fontSize={50} className="upvote-btn" />
          </button>

          <p className="my-4 font-bold text-purple-500">{votesCount}</p>

          <button onClick={() => dispatch(handleDownVote(postId))}>
            <BiDownArrow fontSize={50} className="downvote-btn" />
          </button>
        </div>

        <div className="flex flex-col content">
          {/*  */}
          <div className="flex items-center gap-4 layer-one">
            <div className="w-10 img-container">
              <img src={picUrl} alt="User Pic" />
            </div>

            <div className="info">
              Posted by <a className="font-semibold text-purple-700">@{username}</a>
            </div>
          </div>

          <div className="my-4 layer-two">
            <h1 className="text-3xl font-bold">{post}</h1>
          </div>

          <div className="flex gap-4 mb-4 layer-three">
            {tags.map((tag) => (
              <Tag key={tag} tag={tag} />
            ))}
          </div>

          <div className="layer-four">
            <p className="text-xl">{postDescription}</p>
          </div>

          <hr className="my-4" />

          <div className="flex justify-between layer-five">
            <button onClick={() => navigate(`/tweet/${postId}`)}>
              <BiCommentDetail fontSize={25} />
            </button>

            <BiShareAlt fontSize={25} />

            <button
              onClick={() => {
                console.log(isBookmarked);
                return dispatch(handleBoomark(postId));
              }}
            >
              {isBookmarked ? <BiSolidBookmark fontSize={25} /> : <BiBookmark fontSize={25} />}
            </button>
          </div>
        </div>
      </section>

      {props.showComments && (
        <section className="comments">
          {comments.map((comment) => (
            <Comment {...comment} key={comment.commentId} author={username} />
          ))}
        </section>
      )}
    </div>
  );
};

const Tag = ({ tag }) => {
  return (
    <div className="px-2 py-1 text-xs font-semibold text-purple-800 uppercase bg-purple-300 rounded-md">
      <p>{tag}</p>
    </div>
  );
};

const Comment = ({ username, picUrl, likes, comment, author }) => {
  return (
    <>
      <div className="flex w-full gap-4 mb-7">
        <div className="w-10 img-container">
          <img src={picUrl} alt="User Pic" />
        </div>

        <div className="w-full info">
          <div className="comment-info">
            <div className="flex gap-2">
              <p className="font-semibold text-purple-800">Ashwin Khode</p>{" "}
              <a className="text-purple-200 ">@{username}</a>
            </div>

            <p className="text-gray-500">
              Replying to <a className="text-blue-700 ">@{author}</a>
            </p>

            <p className="mt-2 text-lg text-white">{comment}</p>
          </div>

          <div className="flex justify-between mt-8 options">
            <button className="flex gap-2">
              <BiHeart fontSize={25} /> {likes}
            </button>

            <BiCommentDetail fontSize={25} />

            <button>
              <BiShareAlt fontSize={25} />
            </button>
          </div>
        </div>
      </div>
    </>
  );
};
