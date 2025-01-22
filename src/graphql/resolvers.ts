import { db } from '../db/db.js';
import type { IUser } from '../db/interface.js';

export const resolvers = {
  Query: {
    getUser: (parent: unknown, args: { id: string }, context: unknown): IUser | null => {
      const id = args.id;
      const user = db.users.find((e) => e.id === id);
      if (!user) return null;
      return user;
    },

    getAllUsers: (parent: unknown, args: unknown, context: unknown): IUser[] => {
      return db.users;
    },
  },

  User: {
    role: (parent: IUser, args: unknown, context: unknown) => {
      return db.roles.find((e) => e.id === parent.roleId);
    },
  },
};
