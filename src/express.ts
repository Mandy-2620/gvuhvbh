import express, { Request, Response } from 'express';
const app = express();
const PORT: number = 3000;

app.get('/', (req: Request, res: Response) => {
    res.send('Welcome to my first Express server!');
});
app.get('/health', (req: Request, res: Response) => {
    res.json({
        status: 'ok',
        time: new Date().toLocaleString(),
    });
});
app.get('/about', (req: Request, res: Response) => {
    res.send('This is a simple API built with Express and TypeScript to practice routing.');
});
const usernames: string[] = ['mike', 'destiny', 'tolu', 'ngozi', 'jason'];
app.get('/usernames', (req: Request, res: Response) => {
    res.json(usernames);
});
app.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}`);
});