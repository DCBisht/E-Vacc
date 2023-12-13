import React from 'react'
import {Link} from 'react-router-dom'
export default function BlogCard({ title, author, date, content ,url,urlToImage}) {
  return (
    <div className="blog-card">
      <img src={urlToImage===null?'https://newsapi.org/images/flags/in.svg':urlToImage} alt=""/>
      <h5>{title}</h5>
      {/* <p>By {author} on {date}</p> */}
      {/* <p>{content}</p> */}
      <Link to={url}><button>Read More </button></Link>
    </div>
  )
}
