import express from 'express'
import path from 'path'

const PORT = process.env.PORT || 3001;

const app = express();

// Have Node serve the files for our built React app
const dirname = path.resolve(path.dirname(''));
app.use(express.static(path.join(dirname, '/client/build')));
// Have Node serve the files for our built React app

app.get("/api", (req, res) => {
    res.json({ message: "Hello from server!" });
});

// All other GET requests not handled before will return our React app
app.get('*', (req, res) => {
    res.sendFile(path.join(dirname, '/client/build', 'index.html'));
})
// All other GET requests not handled before will return our React app

app.listen(PORT, () => {
    console.log(`Server listening on ${PORT}`);
});