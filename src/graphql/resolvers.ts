import { db } from '../db/db.js';

export const resolvers = {
  Query: {
    allUsers() {
      return db.users;
    },
  },
};
