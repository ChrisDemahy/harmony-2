import React from "react";
import { useDispatch } from "react-redux";
import { useTypedSelector } from "../store";
import { updateMessages } from "../store/chat/actions";

const MessageContainer = () => {
  const messages = useTypedSelector((state) => state.chat.messages);
  console.log(messages);

  const dispatch = useDispatch();

  return (
    <div className="container column is-10">
      <div className="section">
        <div className="card">
          <div className="card-header">
            <p className="card-header-title">Header</p>
          </div>
          <div className="card-content">
            <div className="content">Content</div>
          </div>
        </div>
        <br />

        <div className="card is-hidden1">
          <div className="card-header">
            <p className="card-header-title">Header</p>
          </div>
          <div className="card-content">
            <div className="content">
              {" "}
              <button
                onClick={() =>
                  dispatch(
                    updateMessages([
                      { id: 3, content: "hello", user_id: 3, chatroom_id: 4 },
                    ])
                  )
                }
                className="button"
              >
                Click Me!
              </button>
            </div>
          </div>
        </div>
        <br />

        <div className="card is-hidden1">
          <div className="card-header">
            <p className="card-header-title">Header</p>
          </div>
          <div className="card-content">
            <div className="content">Content</div>
          </div>
        </div>
        <br />

        <div className="card is-hidden1">
          <div className="card-header">
            <p className="card-header-title">Header</p>
          </div>
          <div className="card-content">
            <div className="content">Content</div>
          </div>
        </div>
        <br />

        <div className="card is-hidden1">
          <div className="card-header">
            <p className="card-header-title">Header</p>
          </div>
          <div className="card-content">
            <div className="content">Content</div>
          </div>
        </div>
        <br />

        <div className="card is-hidden1">
          <div className="card-header">
            <p className="card-header-title">Header</p>
          </div>
          <div className="card-content">
            <div className="content">Content</div>
          </div>
        </div>
        <br />
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

export default MessageContainer;
