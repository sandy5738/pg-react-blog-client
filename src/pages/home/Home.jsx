import axios from "axios";
import { useState, useEffect } from "react";
import { useLocation } from "react-router-dom";
import Header from "../../components/header/Header";
import Posts from "../../components/posts/Posts";
import SideBar from "../../components/sidebar/SideBar";
import "./Home.css";

export default function Home() {
  const [posts, setPosts] = useState([]);
  const { search } = useLocation();
  // console.log(location)
  useEffect(() => {
    const fetchPosts = async () => {
      const response = await axios.get("/posts" + search);
      setPosts(response.data);
    };
    fetchPosts();
  }, [search]);

  return (
    <>
      <Header />
      <div className="home">
        <Posts posts={posts} />
        <SideBar />
      </div>
    </>
  );
}
