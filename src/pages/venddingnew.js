import React from "react";
import 'bootstrap/dist/css/bootstrap.css'
import Vending from '../components/vending'

class VenddingNew extends React.Component {
    
    state = {
        form:{}
    }

    handleChange = e =>{
        this.setState({
            form:{
                ...this.state.form,
                [e.target.name]:e.target.value
            }
        })
    }

    render(){
        return (

            <div className="row">
                <div className="col-sm" >
                <Vending />
                </div>
            </div>
            
            
        )
    }
}

export default VenddingNew