import { useState } from "react";
import { useDispatch,useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { nanoid } from "@reduxjs/toolkit";

import { blogAdded } from "../reducers/blogSlice";

const CreateBlogForm = () => {
    const [title, setTitle] = useState("");
    const [content, setContent] = useState("");
    const [userId,setUserId] = useState("");
    const dispatch = useDispatch();
    const navigate = useNavigate();
    const users = useSelector(state => state.users);

    const onTitleChange = (e) => setTitle(e.target.value);
    const onContentChange = (e) => setContent(e.target.value);
    const onAuthorChanged = e => setUserId(e.target.value);
    const canSave = [title,content,userId].every(Boolean);

    const handleSubmitForm = () => {
        if (canSave) {
            dispatch(blogAdded(title,content,userId));
            setTitle("");
            setContent("");
            setUserId("");
            navigate("/");
        }
    };

    return (
        <section>
            <h2>ساخت پست جدید</h2>
            <form autoComplete="off">
                <label htmlFor="blogTitle">عنوان پست :</label>
                <input
                    type="text"
                    id="blogTitle"
                    name="blogTitle"
                    value={title}
                    onChange={onTitleChange}
                />
                <label htmlFor="blogAuthor">نویسنده: </label>
                <select id="blogAuthor" value={userId} onChange={onAuthorChanged}>
                    <option value="">انتخاب نویسنده</option>
                    {
                        users.map(user => (
                            <option key={user.id} value={user.id}>{user.fullName}</option>
                        ))
                    }
                </select>
                <label htmlFor="blogContent">محتوای اصلی :</label>
                <textarea
                    id="blogContent"
                    name="blogContent"
                    value={content}
                    onChange={onContentChange}
                />
                <button type="button" onClick={handleSubmitForm} disabled={!canSave}>
                    ذخیره پست
                </button>
            </form>
        </section>
    );
};

export default CreateBlogForm;
