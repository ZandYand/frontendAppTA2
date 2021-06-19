import React, { Component } from 'react'
import axios from 'axios'
import './PostForm.css';

class PostFrom extends Component {
    constructor(props){
        super(props)
        this.state = {
            auditiva: '',
            visual: ''
        }
    }
    
    changeHandler = (e) => {
        this.setState({[e.target.name]: e.target.value})
    }

    submitHandler = (e) => {
        e.preventDefault()
        window.location.reload();
        console.log(this.state)
        axios.post('http://localhost:8000/registros', this.state)
        .then(response => {
            console.log(response)
        })
        .catch(error => {
            console.log(error)
        })
    }

    render() {
        const {auditiva, visual} = this.state
        return (
            <div>
                <form onSubmit={this.submitHandler}>
                    <div>
                        <input type="text" name="auditiva" 
                        value={auditiva}
                        onChange = {this.changeHandler}
                        placeholder="Auditiva"
                        />
                    </div>
                    <div>
                        <input type="text" name="visual" 
                        value={visual}
                        onChange = {this.changeHandler}
                        placeholder="Visual"
                        />
                    </div>
                    <button className="btn" type="submit">Agregar</button>
                </form>
            </div>
        )
    }
}

export default PostFrom;