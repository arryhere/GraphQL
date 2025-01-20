import { db } from '../db/db.js';

export const resolvers = {
  Query: {
    getUser: (parent: unknown, args: { id: string }, context: unknown) => {
      const id = args.id;
      const user = db.users.find((e) => e.id === id);
      if (!user) return null;
      return user;
    },

    getAllUsers: () => {
      return db.users;
    },
  },
};
