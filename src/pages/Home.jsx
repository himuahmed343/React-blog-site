import { collection, deleteDoc, doc, getDocs } from "@firebase/firestore";
import React, { useEffect, useState } from "react";
import { db } from "../firebase-config";

const Home = () => {
  const [postLists, setPostLists] = useState([]);
  const postsCollectionRef = collection(db, "posts");

  useEffect(() => {
    const getPosts = async () => {
      const data = await getDocs(postsCollectionRef);
      setPostLists(data.docs.map((doc) => ({ ...doc.data(), id: doc.id })));
    };
    getPosts();
  });

  const deletePost = async (id) => {
    const postDoc = doc(db, "posts", id);
    await deleteDoc(postDoc);
  };
  return (
    <div className="homePage">
      {postLists.map((post, id) => {
        return (
          <div className="post" key={id}>
            <div className="postHeader">
              <div className="title">
                <h1>{post.title}</h1>
              </div>
              <div
                className="deletePost"
                onClick={() => {
                  deletePost(post.id);
                }}
              >
                <button>&#128465;</button>
              </div>
            </div>
            <div className="postTextContainer">
              <p>{post.postText}</p>
            </div>
            <div className="authorDetails">
              <img src={post.author.image} alt="" className="authorImg" />
              <span> @ {post.author.name}</span>
            </div>
          </div>
        );
      })}
    </div>
  );
};

export default Home;
