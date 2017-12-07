const nodeController = require('../controllers/nodeController');

module.exports = (express) =>{
    const router = express.Router();

    router.route('/')
        .get(nodeController.index);
    router.route('/')
        .post(nodeController.addNode);
    return router;
}