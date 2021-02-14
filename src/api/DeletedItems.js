import axios from 'axios'

export default class DeletedItems {
    constructor(){
        this.getURL = 'localhost:3000'
        this.postURL = 'localhost:3000/deleteditems'
    }

    getDeletedItems(){
        return axios.get(this.getURL)
        .then((res) => {
            const error = res.data.error
            if (error) throw error
            return res
        })
        .catch((err) => {
            return err
        })
    }
    sendDeletedItems(deleteditems) {
        deleteditems = this.deleteditems
        return axios.post(this.postURL,{'deleteditems' : deleteditems})
        .then ((res) => {
            const error = res.data.error;
            if(error) throw error
            return console.error();
        }).catch((err) => {
            return err
        })
    }
}