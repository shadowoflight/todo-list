import axios from 'axios'

export default class DeletedItems {
    constructor(){
        this.getURL = 'localhost:3000/deleteditems'
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
}