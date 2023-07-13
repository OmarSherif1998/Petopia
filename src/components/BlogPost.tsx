import React from 'react';
import { BlogCardsData } from '../db/data';
import BlogCards from './Cards/BlogCards';

export const BlogPost = () => {
  return (
    <div className=" blogPost bg-white p-8 border border-purple-600">
      <div className=" flex flex-col items-center py-8">
        <p className=" uppercase text-purple-600 font-Nunito font-bold text-md">
          our Blog
        </p>
        <p className=" uppercase text-black font-Nunito font-bold text-2xl">
          Latest posts
        </p>
      </div>
      <div className="  flex items-center gap-5  ">
        {BlogCardsData.map((blog, index) => (
          <BlogCards
            key={index}
            PeopleIcon={blog.peopleIcon}
            CalenderIcon={blog.CalenderIcon}
            title={blog.title}
            image={blog.image}
            desc={blog.desc}
            date={blog.date}
            author={blog.author}
          />
        ))}
      </div>
    </div>
  );
};
