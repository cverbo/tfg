import { Show } from './show';
import { Episode } from './episode';

export class User {
  id: string;
  userName: string;
  password: string;
  email: string;
  fullName: string;
  type: string;
  active: boolean;
  createdAt: Date;
  followedShows: Show[];
  watchedEpisodes: Episode[];
  follwedUsers: User[];
}
