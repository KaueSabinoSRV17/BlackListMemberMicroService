import fastify, { FastifyRequest, FastifyReply } from 'fastify';

const server = fastify();

server.get('/members', async (request: FastifyRequest, reply: FastifyReply) => {
  reply
    .type('application/json')
    .status(200)
    .send({hello: 'world'})
  reply
  return { hello: 'world' };
});

server.listen(3000, (err) => {
  if (err) {
    console.error(err);
    process.exit(1);
  }
  console.log('Server started on port 3000');
});
