import { getUsers, getUserAvatar } from './users';
import { IUser } from '../../../types/user';

export const getUsersData = async (): Promise<IUser[]> => {
  let newUsers: IUser[] = [];

  try {
    const res = await getUsers();

    const tmpUsers = [...res?.data];

    for (const us of tmpUsers) {
      const resp = await getUserAvatar(us.username);

      newUsers.push({ ...us, avatar: resp.data });
    }
  } catch (err) {
    console.error(err);
  }

  return newUsers;
};
