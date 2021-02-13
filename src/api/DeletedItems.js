import axios from 'axios'

export default class DeletedItems {
    constructor(){
        this.getURL = 'localhost:3000'
        this.postURL = 'localhost:3000/deleteditems'
    }

    getDeleteditems(){
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
    sendDeleteditems() {
        return axios.post(this.postURL)
        .then ((res) => {
            const error = res.data.error;
            if(error) throw error
            return console.error();
        }).catch((err) => {
            return err
        })
    }
}