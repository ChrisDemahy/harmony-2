import React from "react";
import { useDispatch } from "react-redux";
import { useTypedSelector } from "../store";

import { setMessages } from "../store/chat/actions";
import { thunkGetMessages } from "../thunk";

const Messages = () => {
  const dispatch = useDispatch();
  React.useEffect(() => {
    dispatch(thunkGetMessages());
  }, [dispatch]);
  const { messages } = useTypedSelector((state) => state.chat);

  return (
    <div className="container column is-10">
      <div className="section">
        {messages?.map((msg) => (
          <div key={msg.id}>
            <div className="card is-hidden1">
              <div className="card-header">
                <p className="card-header-title">User ID:{msg.user_id}</p>
              </div>
              <div className="card-content">
                <div className="content">{msg.content}</div>
              </div>
            </div>
            <br />
          </div>
        ))}
      </div>
    </div>
  );
  // return (
  //   <div className="columns is-centered">
  //     <div className="column has-text-centered is-2">
  //       <a className="button">Button 1</a>
  //     </div>
  //     <div className="column has-text-centered is-2">
  //       <a className="button">Button 2</a>
  //     </div>
  //     <div className="column has-text-centered is-2">
  //       <a className="button">Button 3</a>
  //     </div>
  //     <div className="column has-text-centered is-2">
  //       <a className="button">Button 4</a>
  //     </div>
  //   </div>
  // );
};

export default Messages;
