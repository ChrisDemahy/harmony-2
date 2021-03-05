import React from "react";
import { useSelector } from "react-redux";

interface message {
  id: number;
  content: string;
  user_id: number;
  chatroom_id: number;
  created_at: string;
  updated_at: string;
}
export const Message = (props: message) => {
  const todo = useSelector((state) => state);
  console.log(todo);
  return <div></div>;
};
