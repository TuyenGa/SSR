import React from 'react';
import Todo from './components/todo';
import TodoList from './components/todoList';
import axios from 'axios';



class App extends React.Component{
    constructor(props){
        super(props);
        this.state = {
            todo: '',
            todolist : []
        }

    }


    componentDidMount(){
        let data = axios.get('localhost:3000/api/todo')
            .then(res => {
                return res;
            })
            .catch(err => err);
        console.log(data);

    }

    handleSubmit(e){
        e.preventDefault();
        let newList = this.state.todolist;
        newList.unshift(this.state.todo);
        this.setState({
            todolist:newList,
            todo:''
        });
    }
    handleChange(e){
        e.preventDefault();
        this.setState({
            todo: e.target.value
        })
    }
    handleClick(index){
        let newList = this.state.todolist.filter((user,i)=>{
            return i!== index;
        });
        this.setState({
            todolist:newList
        })
    }

    render(){
        return(
            <div className="row">
                <Todo
                    onForcusSubmit={(data) => this.handleSubmit(data)}
                    onForcusChange={(data) => this.handleChange(data)}
                />
                <TodoList onForcusClick={(index) => this.handleClick(index)} todolist={this.state.todolist}/>
            </div>
        )
    }
}
export default App;

