import { useSelector, useDispatch } from "react-redux";
import { Link } from "react-router-dom";
import { selectAllUsers } from "../reducers/userSlice";

const UsersList = () => {
    const users = useSelector(selectAllUsers);

    const renderedUsers = users.map((user) => (
        <li key={user.id}>
            <Link to={`/users/${user.id}`}>{user.fullname}</Link>
        </li>
    ));

    return (
        <section>
            <h2>لیست نویسندگان</h2>
            <ul>{renderedUsers}</ul>
        </section>
    );
};

export default UsersList;
