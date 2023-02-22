import React from "react";
export default class State extends React.Component{
    state={
        value:"Akhilesh",
        age:26   
    }
    onClick=()=>{
        this.setState({value:"rohit",age:this.state.age+1})
    }
    render(){
        return(<div>
            <h1>{this.state.value}</h1>
            <h2>{this.state.age}</h2>
            <button onClick={this.onClick}>click</button>
        </div>)
    }


}