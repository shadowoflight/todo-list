const controller = {


    getDeleteditems: (req,res,next) => {
     const deletedItems = req.params
     return next()
    },

    sendDeletedItems : (req,res,next) => {

    }
}
module.exports = controller ;