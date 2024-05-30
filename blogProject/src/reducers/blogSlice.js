import { createSlice, nanoid } from "@reduxjs/toolkit";
import {sub} from "date-fns-jalali";

const initialState = {
   blogs: [
      {
         id: nanoid(),
         date: sub(new Date() , {minutes: 10}).toISOString(),
         title: "اولین پست",
         content: "محتوای اولین پست ما ☺️",
         user: "1"
      },
      {
         id: nanoid(),
         date: sub(new Date() , {minutes: 5}).toISOString(),
         title: "دومین پست",
         content: "دومین پست ما میباشد سلام دنیا 🤗",
         user: "2"
      },
   ],
};

const blogsSlice = createSlice({
   name: "blogs",
   initialState: initialState,
   reducers: {
      blogAdded: {
         reducer(state, action) {
            state.blogs.push(action.payload);
         },
         prepare(title, content,userId) {
            //Complex logic
            return {
               payload: {
                  id: nanoid(),
                  date: new Date().toISOString() ,
                  title,
                  content,
                  user: userId,
               },
            };
         },
      },
      blogUpdated: (state, action) => {
         const { id, title, content } = action.payload;
         const existingBlog = state.blogs.find((blog) => blog.id === id);

         if (existingBlog) {
            existingBlog.title = title;
            existingBlog.content = content;
         }
      },
      blogDeleted: (state, action) => {
         const { id } = action.payload;
         state.blogs = state.blogs.filter((blog) => blog.id !== id);
      },
   },
});

export const selectAllBlogs = (state) => state.blogs.blogs;

export const selectBlogById = (state, blogId) =>
    state.blogs.blogs.find((blog) => blog.id === blogId);

export const { blogAdded, blogUpdated, blogDeleted } = blogsSlice.actions;

export default blogsSlice.reducer;
