import React, { useState,useEffect } from "react";
import "../CSS/Home.css";
import BlogCard from "./BlogCard";
import { fetchBlogs } from "../api-calls/Helper";
export default function Home() {
  const [blogs, setBlogs] = useState([]);
    useEffect(()=>{
      fetchBlogs().then((data) => setBlogs(data))
      .catch((err) => console.log(err));
    },[]);
  return (
    <section className="home" id="home">
      <div className="content">
        <h3>stay safe, stay healthy, stay vaccinated</h3>
        <h3>Book your Vaccine Now!!</h3>
        <p>
          {" "}
          Vaccination throughout the childhood is very essential as it helps in
          providing immunity before children are exposed to any life-threatening
          diseases.
        </p>
        <p> If not vaccinated on time may face sevire health issues.</p>
        <p>These are some of the articles depriciating the news, related to recent health illnesses. </p>
      </div>
      <div className="blog-list">
        {blogs.map((blog) => (
          <BlogCard
            key={blog.url}
            title={blog.title}
            author={blog.author}
            date={blog.date}
            content={blog.description}
            url={blog.url}
            urlToImage={blog.urlToImage}
          />
        ))}
      </div>
    </section>
  );
}
