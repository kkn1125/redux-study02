import React, { useEffect, useState } from "react";
import { useParams, Link } from "react-router-dom";
import { getPostById } from "../apis/posts";

function Page() {
  const params = useParams();
  const [post, setPost] = useState(null);

  useEffect(() => {
    getPostById(params.id).then((data) => {
      setPost(data);
    });
  }, []);

  return (
    <div>
      <Link to='/'>home</Link>
      {post && (
        <>
          <div>{post.title}</div>
          <div>{post.body}</div>
        </>
      )}
    </div>
  );
}

export default Page;
