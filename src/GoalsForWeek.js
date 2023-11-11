import userEvent from "@testing-library/user-event";
import done from './heart.jpeg'
import { Component } from "react";



export class GoalsForWeek extends Component{
    constructor(){
    super();
  
    this.state={
        userInput:'',
        goalsList:[]

    }
}


onCahngeEvent(e){
    this.setState ({userInput: e})
    
}

addItem(input){
    if(input ===""){
        alert("PLS,enter an Item")
    }
    else{
        let listArray=this.state.goalsList;
        listArray.push(input);
        this.setState({goalsList:listArray,userInput:''})
    }
}

deleteItem(){
    let listArray=this.state.goalsList;
    listArray=[]
    this.setState({goalsList:listArray})
}

crossed(event){
    const li= event.target
    li.classList.toggle('crossed')
}

onFontSabmit(e){
    e.preventDefault();

}
render(){
    return(

    <form onSabmit={this.onFontSabmit}>
<div className="container" >
    <input type='text'
    placeholder="What are you golas?"
    onChange={(e)=>{this.onCahngeEvent(e.target.value)}}
    value={this.state.userInput}/>
</div>
<div className="container">
    <button className="add" onClick={()=>this.addItem(this.state.userInput)}>Add</button>
</div>
<ul>
    {this.state.goalsList.map((item,i) => (<li onClick={this.crossed} key={i}>
        <img src={done} width="40px"/>
        {item}</li>   
    
    ))}
</ul>
<div className="container">
   <button className="del" onClick={()=>this.deleteItem()}>Delete</button>
</div>
</form>
        
)
}
}

