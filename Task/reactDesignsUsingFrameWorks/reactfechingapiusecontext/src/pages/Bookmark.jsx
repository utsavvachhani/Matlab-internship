import { TOGGLE_BOOKMARK, TOGGLE_UNBOOKMARK } from "../constant/Reducer";
import User from "../components/User.jsx";
import { useDispatch, useSelector } from "react-redux";

function Bookmark() {
  const dispatch = useDispatch();
  const data = useSelector((state) => state.data.data);
  console.log("Bookmarked Data in Bookmark component:", data)
  const handleBookMark = (id) => {
    console.log("Bookmark clicked for ID:", id);
    if (!data.find((item) => item.id === id).bookmark) {
      dispatch({ type: TOGGLE_BOOKMARK, payload: id });
    } else {
      dispatch({ type: TOGGLE_UNBOOKMARK, payload: id });
    }
  };
  const bookmarkedData = data.filter((item) => item.bookmark === true);

  if (bookmarkedData.length === 0) {
    return <div className="bg-black text-white p-8">No bookmarks available.</div>;
  }

  return (
    <div className="bg-black text-white p-8">
      {bookmarkedData.map((item) => (
        <User
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

export default Bookmark;
