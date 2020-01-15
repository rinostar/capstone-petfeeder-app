// const router = require('express').Router();
// const Log = require('../models/log_model');

// router.get('/', (req, res, next) => {
//   Log.find({}, (err, logs) => {
//     if (err) next(err);
//     else res.json(logs);
//   });
// });

// router.post('/add', (req, res, next) => {
//   console.log(req)
//   const newLog = new Log({
//     device: req.body.device,
//     fedTime: req.body.fedTime,
//   });
//   newLog.save(err => {
//     if (err) next(err);
//     else res.json({ newLog, msg: 'Log successfully saved!' });
//   });
// });

// module.exports = router;
