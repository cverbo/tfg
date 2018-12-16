import { FollowedShow } from './followedShow';
import { WatchedEpisode } from './watchedEpisode';
import { FollowedUser } from './followedUser';
export class User {
  id: string;
  userName: string;
  password: string;
  email: string;
  firstName: string;
  lastName: string;
  birthdate: Date;
  type: string;
  active: boolean;
  createdAt: Date;
  followedShows: FollowedShow[];
  watchedEpisodes: WatchedEpisode[];
  follwedUsers: FollowedUser[];
}
