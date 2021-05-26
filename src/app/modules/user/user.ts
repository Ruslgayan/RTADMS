import {UserRoles} from './userRoles';
import {UserPermissions} from './userPermissions';

export interface User{
  userID: number;
  nic: string;
  email: string;
  username: string;
  password: string;
  status: boolean;
  roles: UserRoles[];
  permissions: UserPermissions[];
}
