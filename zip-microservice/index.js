import express from 'express';
const app = express();
import fs from 'fs';
import bodyParser from 'body-parser';

app.use((req, res, next) => {
    res.header('Access-Control-Allow-Origin', '*');
    res.header('Access-Control-Allow-Methods', 'GET,PUT,POST,DELETE,OPTIONS');
    res.header(
        'Access-Control-Allow-Headers',
        'Content-Type, Authorization, Content-Length, X-Requested-With, x-access-token, Cache-Control',
    );

    if (req.method === 'OPTIONS') {
        res.sendStatus(200);
    } else {
        next();
    }
});

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

// Get a list of all the downloadable files
app.get ('/', (req, res) => {
    try {
        const zipFolder = './zips/';
        const temp = [];
        const veryComplexBusinessLogic = (fileID) => fileID * 2;
        const secretIDMapping = {
          2: "one",
          4: "22",
          6: "33threee"
        }
        fs.readdir(zipFolder, (err, files) => {
            files.forEach(file => {
                const [fileId] = file.split(".");
                const doubleId = veryComplexBusinessLogic(fileId);
                temp.push({name: file, specialId: secretIDMapping[doubleId]});
            })
            res.send(temp);     
        });
    } catch (err) {
        console.log(err)
    }
});

// Main logic
app.post('/', (req, res) => {
    try {
        const { specialID } = req.body;

        if (!specialID) {
            res.writeHead(400, { 'Content-Type': 'text/plain' });
            return res.end('specialID needs to be specified');
        }

        const specialIDsMap = {
            one: 1,
            22: 2,
            '33threee': 3,
        };
        const targetFile = specialIDsMap[specialID];
        const filePath = `./zips/${targetFile}.zip`;
        const fileName = 'test-file.zip';

        fs.exists(filePath, (exists) => {
            if (exists) {
                res.writeHead(200, {
                    'Content-Type': 'application/octet-stream',
                    'Content-Disposition': 'attachment; filename=' + fileName,
                });
                fs.createReadStream(filePath).pipe(res);
            } else {
                res.writeHead(400, { 'Content-Type': 'text/plain' });
                res.end('ERROR File does not exist');
            }
        });
    } catch (err) {
        console.log(err);
    }
});

app.listen(5001);
