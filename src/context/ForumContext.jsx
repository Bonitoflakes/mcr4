/* eslint-disable react/prop-types */
import { useReducer } from "react";
import { createContext } from "react";
import { ForumReducer, initialState } from "../reducer/Forum.reducer";
import { useEffect } from "react";
import { forumData } from "../api/data";

export const ForumContext = createContext(null);

export const ForumContextProvider = ({ children }) => {
  const [state, dispatch] = useReducer(ForumReducer, initialState);
  const posts = state.posts;

  useEffect(() => {
    dispatch({
      type: "fetch_posts",
      payload: forumData,
    });
  }, []);

  const value = { state, posts, dispatch };
  return <ForumContext.Provider value={value}>{children}</ForumContext.Provider>;
};
