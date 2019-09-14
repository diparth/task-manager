import app from './server';

const PORT: number = 3000;

app.listen(PORT, (err) => {
    if (err) {
        return console.log(err);
    }

    return console.log(`Server is listening on ${ PORT }`);
});
