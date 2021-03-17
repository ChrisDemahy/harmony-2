import React from "react";
import { Link } from "react-router-dom";
import { useTypedSelector } from "../store";

const Sidebar = () => {
  const chatState = useTypedSelector((state) => state.chat);
  const { chatRooms } = chatState;

  return (
    <aside className="column is-2 is-narrow-mobile is-fullheight section is-hidden-mobile">
      <p className="menu-label is-hidden-touch">Navigation</p>
      <ul className="menu-list">
        <li>
          <Link to="/app" className="">
            <span className="icon">
              <i className="fa fa-home"></i>
            </span>
            Home
          </Link>
        </li>
        <li>
          <Link to="/app/users" className="">
            <span className="icon">
              <i className="fa fa-home"></i>
            </span>
            Users
          </Link>
        </li>
        <li>
          <Link to="/app/chatrooms">
            {/* className="is-active"> */}
            <span className="icon">
              <i className="fa fa-table"></i>
            </span>
            Chatrooms
          </Link>

          <ul>
            {chatRooms?.map((room) => (
              <li key={room.id}>
                <Link to={`/app/chatrooms/${room.id}`}>
                  <span className="icon is-small">
                    <i className="fa fa-link"></i>
                  </span>
                  {room.name}
                </Link>
              </li>
            ))}
          </ul>
        </li>
        <li>
          <Link to="/" className="">
            <span className="icon">
              <i className="fa fa-info"></i>
            </span>{" "}
            About
          </Link>
        </li>
      </ul>
    </aside>
  );
};
export default Sidebar;
