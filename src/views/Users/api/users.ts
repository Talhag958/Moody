import axios from 'axios';

const usersUrl: string = process.env.REACT_APP_USERS_URL || '';
const userAvatarUrl: string = process.env.REACT_APP_USER_AVATAR_URL || '';

export const getUsers = (): Promise<any> => {
  return axios.get(usersUrl)
}

export const getUserAvatar = (userName: string): Promise<any> => {
  return axios.get(`${userAvatarUrl}/{{${userName}}}.svg?options[mood][]=happy`);
}
