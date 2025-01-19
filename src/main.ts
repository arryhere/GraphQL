import { ApolloServer } from '@apollo/server';
import { startStandaloneServer } from '@apollo/server/standalone';

async function server() {
  const port = 3007;

  const apollo_server = new ApolloServer({});

  const { url } = await startStandaloneServer(apollo_server, { listen: { port: port } });

  console.log(`[server]: http://localhost:${port}`);
}

server();
