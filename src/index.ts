import express, {Express, Request, Response} from 'express';
const app: Express = express();
const PORT = process.env.PORT || 3000;

//app.use(express.json()); // middleware that would parse incoming and outgoing request

app.get('/', (req: Request, res: Response) => { // You don't need to expressly state Request and Response
  res.send("hello!");
});

app.listen(PORT, () => {
  console.log(`app is listening @ http://localhost:${PORT}`);
});

// convert this to use typescript
// set up some npm scripts so that my code auto transpiles