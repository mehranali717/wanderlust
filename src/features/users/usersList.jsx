import { useGetUSersQuery} from "./usersApiSlice";

const UsersList = () => {
  const {
    data: users,
    isLoading,
    isSuccess,
    isError,
    error,
  } = useGetUSersQuery;
  console.log(users);
  
  let content;
  if (isLoading) {
    content = <p>"Loading...!"</p>;
  } else if (isSuccess) {
    content = (
      <section>
        <h1>
          <ul>
            {users.map((user, index) => (
              <li key={index}>{user.username}</li>
            ))}
          </ul>
        </h1>
      </section>
    );
  } else if (isError) {
    content = <p>{JSON.stringify(error)}</p>;
  }
  return content;
};
export default UsersList;
