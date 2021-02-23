import { Server } from 'miragejs';

export function createServer() {
  return new Server({
    routes() {
      this.get('/tasks', () => ({
        tasks: [
          { id: 1, text: 'Feed the cat' },
          { id: 2, text: 'Wash the dishes' },
        ],
      }));
    },
  });
}
