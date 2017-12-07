module.exports = (express) => {
    const router = express.Router();

    const todo = require('./todo')(express);
    router.use('/todo',todo);

    return router;
};