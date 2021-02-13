import React, { Component } from 'react'
import delAPI from '../api/DeletedItems'

class DeletedItems extends Component {
    constructor(props){
        super(props)
            this.DeletedItems = new delAPI()

        this.state ={
            deletedItems : []
        }
    }

    componentDidMount(){
      this.getItems()
      
    }

    getItems(){
        this.DeletedItems.getDeleteditems().then(res => {
            this.setState({
                deletedItems : res.DeletedItems
            })
        })
    }
    render() {
        return(
            this.state.deletedItems.forEach(element => {
                <div>{element}</div>
            })
        )
    }
}
export default DeletedItems;