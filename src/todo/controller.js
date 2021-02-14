const model = require("./model");

const controller = {


    getDeletedItems: (req,res,next) => {
     const deletedItems = req.params
     model.getDeletedItems(deletedItems);
     return next()
    },

    sendDeletedItems : (req,res,next) => {
      model.sendDeletedItems().then((response) => {
          Object.assign(res.locals, {
              payload: {
                  success : true
              }
          })
      })
    }
}
module.exports = controller ;