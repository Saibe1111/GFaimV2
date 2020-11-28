const express = require('express');
const Router = express.Router;
const multer = require('multer');
const iconv = require('iconv-lite');
const csv = require('csv-parser');
const router = new Router();
const upload = multer({ dest: 'tmp/csv/' });
const fs = require('fs');
const TicketDetail = require('../tables/TicketDetail.js');

module.exports.run = (app) => {
    router.post('/', upload.single('file'), function (req, res) {
        fs.createReadStream(req.file.path)
            .pipe(iconv.decodeStream('WINDOWS-1252'))
            .pipe(csv({ separator: ';' }))
            .on('data', (data) => new TicketDetail(data))
            .on('end', () => {
                fs.unlinkSync(req.file.path);
                console.log(TicketDetail.list.size)
            });
        return res.json({ message: "valid csv" })
    });
    app.use('/ticketdetail', router);
}