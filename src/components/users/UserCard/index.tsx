import { IUser } from '../../../types';
import CardImage from './CardImage';
import CardBody from './CardBody';
import CardFooter from './CardFooter';

export const UsersList = (props: { user: IUser }) => {
  const { user } =  props;
  return (
    <div className="col-md-3 m-auto my-2" style={{ minWidth: "250px" }}>
      <div className="card d-flex">
        <CardImage avatar={user.avatar} />
        <CardBody name={user.name} email={user.email} phone={user.phone} website={user.website} />
        <CardFooter />
      </div>
    </div>
  );
};

export default UsersList;
