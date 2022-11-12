import express from 'express';

const PORT = 3333 || process.env.PORT;
const HOST = 'localhost' || process.env.HOST;

const app = express();

app.get('/', (request, response) => {
  return response.json({ message: 'Hello World' });
});

app.listen(PORT, () => {
  console.log(`Server is running on http://${HOST}:${PORT}`);
});
