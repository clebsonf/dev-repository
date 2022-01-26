const router = require('express').Router();

router.use('/api/v1', require('./api/v1'));
router.get('/api', (res, req, next) => res.json({message: "Ecommerce api"}))

module.exports = router;