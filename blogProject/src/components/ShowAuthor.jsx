import {useSelector} from "react-redux";

const ShowAuthor = ({userId}) => {
    const  author = useSelector(state => state.users.find(user => user.id === userId));
    return(
        <span>
              توسط  {author ? author.fullName : " نویسنده ناشناس "}
        </span>
    );
}
export default ShowAuthor;