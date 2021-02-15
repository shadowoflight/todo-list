import React, { Component } from "react";
import './table.css'
export default class TodoList extends Component {
    constructor(props){
        super(props)
    this.state = {
        item : {
        Id: "",
        Title: "",
        status: "Pending"
        }

    };
}
   handleIdChange = (event) => {
        this.setState({
            item : event.target.value
        });
    };
    handleTitleChange = (event) => {
        this.setState({
            item : {
                Id: event.target.value
            }
        });
    }
    handleStatusChange = (event) => {
        this.setState({
            item : {
            status: event.target.value
            }
        });
    };
    handleToDoSubmit = (event) => {
        event.preventDefault();
        this.props.onAdd({
            item : {
            Id: this.state.Id,
            Title: this.state.Title,
            status: this.state.status
            }
        });
        this.setState({
            item : {
            Id: "",
            Title: "",
            status: "Pending"
            }
        });
    };
    
    render() {
        return (
            <div>
                <h3>
                    Add ToDo
                </h3>
                <form className="forms" onSubmit={this.handleToDoSubmit} >
                    <div className="form-group" >
                        <label>Id: </label>
                        <input value={this.state.item.Id} onChange={this.handleIdChange} className="form-control" placeholder="Enter Id" />
                    </div>
                    <div className="form-group" >
                    <label>Item Name: </label>
                        <input value={this.state.item.Title} onChange={this.handleTitleChange} className="form-control" placeholder="Enter Title" />
                    </div>
                    <div className="form-group">
                        <select value={this.state.item.status} onChange={this.handleStatusChange} className="form-control" >
                            <option value="Done" >Done</option>
                            <option value="Pending" >Pending</option>
                        </select>
                    </div>
                    <button type="submit" className="form-control btn btn-primary" >Add Todo</button>
                </form>
            </div>
        );
    }
}