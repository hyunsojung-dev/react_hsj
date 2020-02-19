import React, { Component } from 'react';
import axios from 'axios';

export default class EditTodo extends Component {

    constructor(props) {
        super(props);

        this.state = {
            todo_description: '',
            todo_responsible: '',
            todo_priority: '',
            todo_createdAt: ''
        }
    }

    componentDidMount() {
        axios.get('http://ec2-18-219-213-176.us-east-2.compute.amazonaws.com:7376/Problem/delete/'+this.props.match.params.id)
            .then(response => {
                console.log(response);
                this.setState({
                    todo_description: response.data.todo_description,
                    todo_responsible: response.data.todo_responsible,
                    todo_priority: response.data.todo_priority,
                    todo_createdAt: response.data.todo_createdAt
                })   
            })
            .catch(function (error) {
                console.log(error);

            })
            console.log("어디서 에러가 나오는 거야;;;");
    }

    render() {
        return (
            <div>
                
            </div>
        )
    }
}