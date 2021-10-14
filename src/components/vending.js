import React, {useState} from "react";
import './styles/vending.css'
import Timer from "../components/waiting";

class vending extends React.Component{
    
    constructor(props) {
    	super(props);
    	this.state = {clicks: 0}
    }    

    handleDone= e =>{
        e.preventDefault()
        this.setState((prevState) => ({
            clicks: prevState.clicks + 1
        }))
    }
    handleDispatch (value){
        return function () {
            console.log(value)
        }
        
    }
    

    render(){
        const {name, thumbnail,preparation_time} =this.props
        return(
            
            <tr className="table-dark">
                <td className="table-dark align-middle"><img src={thumbnail} className="float-right img-fluid" style={{width:'150px',height:'70px',objectFit:'cover'}}/></td>
                <td className="table-dark align-middle"><h5 align ='center' >{name}</h5></td>
                <td className="table-dark align-middle"><h5 align ='center'>
                <Timer
                    timer={preparation_time}
                  />
                </h5>
                </td>
                <td className="table-info"><button type="button" className="btn btn-primary btn-lg" style={{width:'100%',height:'70px', align:'center'}} onClick={this.handleDone} id="counter">{this.state.clicks}</button></td>
                <td className="table-info"><button type="button" className="btn btn-success btn-lg" style={{width:'100%',height:'70px',align:'center'}} onClick={this.handleDispatch({preparation_time})} name="fill"></button></td>
                <td className="table-dark align-middle"><h5 align="center" ></h5></td>
            </tr>
        )

    }
}

export default vending

