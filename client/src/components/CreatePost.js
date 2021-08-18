import React, { Component } from 'react'
import axios from 'axios'

export default class CreatePost extends Component {
    
    constructor(props){
        super(props);
        this.state={
            topic:"",
            description:"",
            postCategory:""
        }
    }

handleInputChange =(e) =>{
    const {name,value} =e.target;

    this.setState({
        ...this.state,
        [name]:value
    })
}
onsubmit = (e) =>{
    e.preventDefault();
    const {topic,description,postCategory} = this.state;
    const data ={
        topic:topic,
        description:description,
        postCategory:postCategory
    }
    console.log(data)
    axios.post("/post/save",data).then((res) =>{
        if(res.data.success){
            this.setState({
                topic:"",
                description:"",
                postCategory:""
            })
        }
    })
}



    render(){
         return (
        <div>
           <center><h><b>Create New Post</b></h></center>
        <form className="needs-validation" noValidate>
<div className="mb-3">
<label for="exampleInputEmail1" className="form-label">Topic</label>
<input type="text" className="form-control" name="topic" aria-describedby="emailHelp" value={this.state.topic} onChange={this.handleInputChange}/>
</div>
<div className="mb-3">
<label for="exampleInputPassword1" className="form-label">Description</label>
<input type="text" className="form-control" name="description" value={this.state.description} onChange={this.handleInputChange}/>
</div>
<div className="mb-3">
<label for="exampleInputPassword1" className="form-label">Post Category</label>
<input type="text" className="form-control" name="postCategory" value={this.state.postCategory} onChange={this.handleInputChange}/>
</div>
<button type="submit" className="btn btn-primary" onClick={this.onsubmit}>Submit</button>
</form>
    </div>
    )
    }
}