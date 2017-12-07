import React from 'react';

class TodoList extends React.Component{
    constructor(props){
        super(props);

    }
    render(){
        let renderItem = this.props.todolist.map((node,index) =>{
            return (
                <li key={index} onClick={() => this.props.onForcusClick(index)} className="list-group-item">
                    {node}
                </li>
            )
        })
        return(
            <div className="row">
                <div className="form-group">
                    <ul className="list-group">
                        {
                            renderItem
                        }
                    </ul>
                </div>
            </div>
        )
    }
}
export default TodoList;