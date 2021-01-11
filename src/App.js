import React, { Component } from "react";
import TodoList from './TodoList.js';
import './table.css'

class App extends Component {
  constructor(props){
    super(props)
    this.state = {
    todos: [],
    pending:0
};
  }

deleteItem = (toBeDel) => {
  const filteredItems = this.state.todos.filter(x => x.Id !== toBeDel.Id);
  this.setState({
       todos: filteredItems
  });
};
editStats = (stats) => {
  this.setState(state => ({
       todos: state.todos.map(todo => {
         if (todo.Id === stats.Id) {
             return {
                   ...todo,
                   status: todo.Status === "Done" ? "Pending" : "Done"
             };
        } else {
            return todo;
        }
    })
}));
};
addToDo = (todo) => {
  this.setState({
      todos: [...this.state.todos, todo]
  });
};

render() {
    return (
         <div className="container" >
             <h1>TodoList </h1>
             <TodoList onAdd={this.addToDo} />
             <h3>You have {this.state.todos.length} item in your list</h3>
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

export default App;
