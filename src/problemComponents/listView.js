import React, { Component } from 'react';
import { Route, Link } from 'react-router-dom';
import axios from 'axios';
import Moment from 'react-moment';
import DeleteIcon from '@material-ui/icons/Delete';
import { Table } from 'react-bootstrap';

// img import
import delete_icon from '../../src/img/delete_icon.png';
import edit_icon from'../img/edit_icon.png';

const btnStyle = {
    color: "white",
    background: "white",
    //padding: ".375rem .75rem",
    border: "1px solid white",
    borderRadius: ".25rem",
   // fontSize: "1rem",
    lineHeight: 1.5
  };
const Todo = props => (
    
    <tr>
    <td>{props.index}</td>
    {/* 문 제 */}
    <td>{props.todo.todo_description}</td> 
    {/* 정 답 */}
    <td>{props.todo.todo_responsible}</td>
    {/* 어려운 정도 */}
    {/* <td>{props.todo.todo_priority}</td> */}
    <td><Moment format="YYYY/MM/DD">{props.todo.todo_createdAt}</Moment></td>
    <td>
        {/* <Link to={"/Problem/edit/"+props.todo._id} className="btn btn-primary" >Edit</Link> */}
        <Link to={"/Problem/edit/"+props.todo._id} ><img src={edit_icon} width="20" height="20"/></Link>
    </td>
    <td> 
        <form method='POST' action={`/Problem/delete/${props.todo._id}` } >
            <button style={btnStyle} ><img src={delete_icon} width="20" height="20"/></button>
         </form>
    </td>
</tr>
   
)

export default class TodosList extends Component {

    constructor(props) {
        super(props);
        this.state = {todos: []};
        //this.onDeletebutton = this.onDeletebutton.bind(this);
    }
    
    componentDidMount() {
        axios.get('http://ec2-18-219-213-176.us-east-2.compute.amazonaws.com:7376/Problem/')
            .then(response => {
                this.setState({ todos: response.data });
            })
            .catch(function (error){
                console.log(error);
            })
    }

    onSubmit(id) {
        console.log(id);
        axios.post('/Problem/delete/'+this.props.match.id, id)
            .then(res => console.log(res.data));
        
        this.props.history.push('/Problem/');
    }

    // 배열에서 map() 함수를 활용해 part id 배열을 만듬
    todoList() {
        var data = this.state.todos;
        return data.map(function(currentTodo, i){
            return <Todo todo={currentTodo} key={i} index={i+1}/> ;
        })

    }

    render() {
        return (
            <div>
                {/* <h3>List</h3> */}
                <Table striped bordered hover size="sm">
                    <thead>
                        <tr>
                            <th>#</th>
                            <th>문제</th>
                            <th>정답</th>
                            {/* <th>단계</th> */}
                            <th>date</th>
                            <th>edit</th>
                            <th>delete</th>
                        </tr>
                    </thead>
                    <tbody >
                        { this.todoList() }                                  
                    </tbody>
                </Table>
            </div>
        )
    }
}