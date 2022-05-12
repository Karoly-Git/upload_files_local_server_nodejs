const express = require('express');
const multer = require('multer');
const uuid = require('uuid').v4;
const port = process.env.PORT || 3001;

const app = express();

app.listen(port, () => console.log(`Server is runnng on http://localhost:${port}`));

const storage = multer.diskStorage({
    destination: (req, file, cb) => {
        cb(null, 'uploads');
    },
    filename: (req, file, cb) => {
        const { originalname } = file;
        cb(null, `${uuid()}-${originalname}`);
    }
});

const upload = multer({ storage: storage });

app.use(express.static('public'));

app.post('/upload', upload.array('avatar'), (req, res) => {
    return res.json({ status: 'OK', uploaded: req.files.length });
});