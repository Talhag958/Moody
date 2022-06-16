import { useEffect, useState } from "react";
import { getUsersData } from './api/useGetUsers';
import UsersList from "../../components/users/UsersList";

const Users = () => {
  const [users, setUsers] = useState([]);

  useEffect(() => {
    getUsersData().then((us: any) => setUsers(us));
  }, []);

  return <UsersList users={users} />;
};

export default Users;
