const Node = require('../models/nodeModel');

module.exports = {
    index : async (req, res) => {
        try{
            let allNode = await Node.find({});
        res.status(200).json(allNode)
        }
        catch (err)
        {
            res.json({err: err.message});
        }
    },
    addNode: async (req, res) => {
        try{
            let data = req.body;
            let addNode = new Node(data);
            console.log(addNode);
            await addNode.save();
            res.status(200).json(addNode);
        }
        catch (err){
            res.json({err: err.message});
        }
    }
}