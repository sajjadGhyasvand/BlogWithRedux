import { createSlice, nanoid } from "@reduxjs/toolkit";

const initialState = {
   blogs: [
      {
         id: nanoid(),
         title: "اولین پست",
         content: "محتوای اولین پست ما ☺️",
      },
      {
         id: nanoid(),
         title: "دومین پست",
         content: "دومین پست ما میباشد سلام دنیا 🤗",
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
         prepare(title, content) {
            //Complex logic
            return {
               payload: {
                  id: nanoid(),
                  title,
                  content,
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
