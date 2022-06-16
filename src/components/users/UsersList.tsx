import UserCard from './UserCard';
import { IUser } from '../../types';

export const UsersList = (props: { users: IUser[] }) => {
  return (
    <div className="container-fluid">
      <div className="row">
        {props.users.map((user: IUser) => (
          <UserCard user={user}/>
        ))}
      </div>
    </div>
  );
};

export default UsersList;
