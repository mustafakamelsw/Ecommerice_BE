import { User } from '../schemas/user.schema';

export interface SearchUsersInterface {
  content: User[];
  count: number;
}
