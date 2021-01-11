import React, { Component } from "react";
import TodoList from './TodoList.js';
import './table.css'

class App extends Component {
  constructor(props){
    super(props)
    this.pending=0
    this.state = {
    todos: [],
    
   }
  }

deleteItem = (toBeDel) => {
  const filteredItems = this.state.todos.filter(x => x.Id !== toBeDel.Id);
  this.pending=this.pending-1;
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
                   status: todo.status === "Done" ? "Pending" : "Done"
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
componentDidUpdate(){
  let pending =0 
  this.state.todos.forEach(index => {
   pending = pending+1
  })
  this.pending=pending
  console.log(this.pending)
}

render() {
  console.log('here render')
    return (
         <div className="container" >
             <h1>TodoList </h1>
             <TodoList onAdd={this.addToDo} />
             <h3>You have {this.pending +1} item in your list </h3>
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

  
                 
