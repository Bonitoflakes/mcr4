import { useContext } from "react";
import { ForumContext } from "./../context/ForumContext";

export const useForum = () => useContext(ForumContext);
