import React from 'react';

class Todo extends React.Component{
    constructor(props){
        super(props)
    }
    render(){
        return(
            <div className="row">
                <div className="col-md-8 col-md-offset-2">
                    <form className="form-group" onSubmit={(data) => this.props.onForcusSubmit(data)}>
                        <input type="text" id="todo" onChange={(event) =>this.props.onForcusChange(event)}/>
                        <button>add</button>
                    </form>
                </div>
            </div>
        )
    }
}

export default Todo;