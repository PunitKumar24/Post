import React, { useState, useEffect } from "react";

const App = () => {
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    fetch("https://dummyjson.com/posts")
      .then((response) => response.json())
      .then((data) => setPosts(data.posts));
  }, []);
  console.log(posts);
  return (
    <table className="">
      <tr className="">
        <th className="border-4  bg-slate-500 border-slate-600 p-4 ">ID</th>
        <th className="border-4 bg-blue-500 border-blue-600 p-4">TITLE</th>
        <th className="border-4 bg-rose-500 border-rose-600 p-4">BODY</th>
        <th className="border-4 bg-yellow-500 border-yellow-600 p-4">
          USER ID
        </th>
        <th className="border-4 bg-lime-500 border-lime-600 p-4">TAGS</th>
        <th className="border-4 bg-green-500 border-green-600 p-4">
          REACTIONS
        </th>
      </tr>
      {posts.map &&
        posts.map((post) => (
          <tr className="text-center border-2" key={post.id}>
            <td className="border-2  bg-slate-400  border-slate-500 p-4">
              {post.id}
            </td>
            <td className="border-2 bg-blue-400 border-blue-500 p-4">
              {post.title}
            </td>
            <td className="border-2 bg-rose-400 border-rose-500 p-4">
              {post.body}
            </td>
            <td className="border-2  bg-yellow-400 border-yellow-500 p-4">
              {post.userId}
            </td>
            <td className="border-2  bg-lime-400 border-lime-500 p-4">
              {post.tags.map((data) => (
                <p key={data.id}>{data + " "} </p>
              ))}
            </td>
            <td className="border-2 bg-green-400 border-green-500 p-4 ">
              {post.reactions}
            </td>
          </tr>
        ))}
    </table>
  );
};

export default App;
