import React, { useEffect, useState } from "react";
import { getPosts } from "../apis/posts";

function Home() {
  const [posts, setPosts] = useState([]);
  
  useEffect(() => {
    getPosts().then((res) => setPosts(res));
  }, []);

  return (
    <div>
      {posts.map(({ id, title, body }) => (
        <div key={id}>
          <a href={`/${id}`}>
            <span>{title}</span>
            <span>{body}</span>
          </a>
        </div>
      ))}
    </div>
  );
}

export default Home;
