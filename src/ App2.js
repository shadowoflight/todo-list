import React, { Component } from "react";
import TodoList from './TodoList.js';
import './table.css'
import delAPI from './api/DeletedItems'
class App2 extends Component {
  constructor(props){
    super(props)
    this.pending=-1
    this.state = {
    todos: [],
    deleteItem: []
    
   }
   this.deletedItems = new delAPI()
  }

deleteItem = (toBeDel) => {
  const filteredItems = this.state.todos.filter(x => x.Id !== toBeDel.Id);
  const deletedItems=this.state.todos.filter(x => x.Id === toBeDel.Id)
  this.pending=this.pending-1;
  this.setState({
       todos: filteredItems,
       deletedItem : deletedItems
  })
  this.deletedItems.sendDeletedItems(deletedItems  => {
    this.setState({
      todos: filteredItems,
      deletedItem : deletedItems
 })
  })
};
editStats = (stats) => {
  this.setState(state => ({
       todos: state.todos.map(todo => {
         if (todo.item.Id === stats.Id) {
             return {
                   ...todo,
                   status: todo.item.status === "Done" ? "Pending" : "Done"
             };
        } else {
            return todo;
        }
    })
}));
};
addToDo = (todo) => {
  this.setState({
      todos: [...this.state.todos, todo.item]
  });
};
componentDidUpdate(){
  let pending =this.state.todos.length
  this.pending=pending
  console.log(this.pending)
}

render() {
  console.log('here render')
    return (
         <div className="container" >
             <h1 className="header">TodoList </h1>
             <TodoList onAdd={this.addToDo} />
             <table className="item-table">
                   <thead>
                     <tr>
                        <th>Sno.</th>
                        <th>Name of Task</th>
                        <th>Status</th>
                        <th></th>
                        <th></th>
                        <th>Action</th>
                        
                     </tr>
                   </thead>
                   <tbody>
                       {this.state.todos.map(x => {
                         return (
                              <tr key={x.Id}>
                              <td>{x.Id}</td>
                              <td>{x.Title}</td>
                              <td>{x.status}</td>
                              <td></td>
                              
                              <td>
                                 <button onClick={() => this.deleteItem(x) }>Delete</button>
                              </td>
                              <td><button onClick={() => this.editStats(x)}>Edit Status</button></td>
                              </tr>
                          );
                       })}
                    </tbody>
                </table>
          </div> 
          
      );
   }
}

export default App2;
