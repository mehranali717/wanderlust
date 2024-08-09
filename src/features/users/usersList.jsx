import { IsLoading } from "../../components";
import { useGetUsersQuery } from "./usersApiSlice";
import styles from "./usersList.module.css"

const UsersList = () => {
  const {
    data: users,
    isLoading,
    isSuccess,
    isError,
    error,
  } = useGetUsersQuery();

  let content;
  if (isLoading) {
    content =<IsLoading />;
  } else if (isError) {
    content = <p>Error: {error.message}</p>;
  } else if (isSuccess) {
    content =<section>
        <h1>User List</h1>
        <ul>
          {users.map((user, index) => (
            <li key={index}>{user.username}</li>
          ))}
        </ul>
      </section>
  } else {
    content = <p>No users found.</p>;
  }

  return content;
};

export default UsersList;
