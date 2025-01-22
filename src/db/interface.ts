export interface IRole {
  id: string;
  name: string;
  desc: string;
}

export interface IUser {
  id: string;
  firstName: string;
  lastName: string;
  email: string;
  password: string;
  dob: string;
  verified: boolean;
  active: boolean;
  failedLoginCount: number;
  roleId: string;
  hoobies: string[];
}
