npm i express multer uuid --save

npm install -g nodemon
npm install --save-dev nodemon
nodemon [your node app]

Uploads files to the directory named 'uploads' on local server.

All files will have unique name.

If unique name not needed then change index.js:16 to this: 'cb(null, `${uuid()}-${originalname}`);'

