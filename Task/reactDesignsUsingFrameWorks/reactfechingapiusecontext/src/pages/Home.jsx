import { useDispatch, useSelector } from "react-redux";
import { TOGGLE_BOOKMARK, TOGGLE_UNBOOKMARK } from "../constant/Reducer";
import User from "../components/User.jsx";

export default function Home() {
  const dispatch = useDispatch();
  const data = useSelector((state) => state.data.data);
  console.log("Data in Home component:", data);

  const handleBookMark = (id) => {
    console.log("Bookmark clicked for ID:", id);
    if (!data.find((item) => item.id === id).bookmark) {
      dispatch({ type: TOGGLE_BOOKMARK, payload: id });
    } else {
      dispatch({ type: TOGGLE_UNBOOKMARK, payload: id });
    }
  };

  

  return (
    <div className="bg-black text-white p-8">
      {data.map((item) => (
        <User
          key={item.id}
          id={item.id}
          login={item.login}
          avatar_url={item.avatar_url}
          bookmark={item.bookmark}
          handleBookMark={handleBookMark}
        />
      ))}
    </div>
  );
}
