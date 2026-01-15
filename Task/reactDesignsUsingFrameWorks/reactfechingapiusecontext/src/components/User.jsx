import React from "react";

function User({ id, login, avatar_url, bookmark, handleBookMark }) {
  return (
    <div
      key={id}
      className="flex items-center gap-4 mb-4 bg-gray-800 p-4 rounded group hover:bg-gray-200"
    >
      <img
        src={avatar_url}
        alt={login}
        className="h-12 w-12 rounded-full"
      />
      <h2 className="font-serif group-hover:text-black">{login}</h2>
      <button
        onClick={() => handleBookMark(id)}
        className="ml-auto px-4 py-2 bg-blue-500 text-white rounded hover:bg-black hover:text-blue-500"
      >
        {bookmark ? "Unbookmark" : "Bookmark"}
      </button>
    </div>
  );
}

export default User;
``