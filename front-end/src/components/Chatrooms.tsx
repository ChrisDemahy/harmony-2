import react from "React";
import { useTypedSelector } from "../store";

const Chatrooms = () => {
  const chatState = useTypedSelector((state) => state.chat);
  const { chatRooms } = chatState;
  return (
    <div className="section">
      {chatRooms?.map((room) => {
        return <h1 key={room.id}>{room.name}</h1>;
      })}
    </div>
  );
};

export default Chatrooms;
