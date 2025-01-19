import fs from 'node:fs/promises';
import path from 'node:path';
import { ApolloServer } from '@apollo/server';
import { startStandaloneServer } from '@apollo/server/standalone';
import { resolvers } from './graphql/resolvers.js';

async function server() {
  const port = 3007;

  const apollo_server = new ApolloServer({
    typeDefs: await fs.readFile(path.join(process.cwd(), 'src', 'graphql', 'schema.graphql'), { encoding: 'utf-8' }),
    resolvers: resolvers,
  });

  const { url } = await startStandaloneServer(apollo_server, { listen: { port: port } });

  console.log(`[server]: http://localhost:${port}`);
}

server();
