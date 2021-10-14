import React from "react";
import './styles/vending.css'
import Timer from "../components/waiting";

class vending extends React.Component {

    constructor(props) {
        super(props);
        this.state = { timer: 0, queue: [], working:false, done:0}
    }
   
    handleTime(time) {        
        this.setState({
            ...this.state,
            queue: [...this.state.queue, time]
        });            
    }

    componentDidUpdate() {        
        if(this.state.timer===0 && this.state.working===false){
            const times=[...this.state.queue];
            if(times.length>0){
                this.setState({
                    ...this.state,      
                    timer:times.pop(),queue: [...times]
                });
            }            
        }
        else{
            if(this.state.working===false){
                this.setState({
                    working:true
                });
                const interval=setInterval(() => {
                    if(this.state.timer-1>0){
                        this.setState({
                            timer: this.state.timer - 1
                        });
                    }
                    else{
                        this.setState({
                            timer:0,working:false,done:this.state.done+1
                        });
                        clearInterval(interval)
                    }
                }, 1000);                
            }            
        }
    }

    handleDispatch(value) {
        return function () {
            console.log(value)
        }
    }

    render() {
        const { name, thumbnail, preparation_time } = this.props
        return (

            <tr className="table-dark">
                <td className="table-dark align-middle"><img src={thumbnail} className="float-right img-fluid" style={{ width: '150px', height: '70px', objectFit: 'cover' }} /></td>
                <td className="table-dark align-middle"><h5 align='center' >{name}</h5></td>
                <td className="table-dark align-middle"><h5 align='center'>
                    <Timer
                        timer={this.state.timer}
                    />
                </h5>
                </td>
                <td className="table-info"><button type="button" className="btn btn-primary btn-lg" style={{ width: '100%', height: '70px', align: 'center' }}
                    onClick={
                        () => {                        
                            this.handleTime(preparation_time);
                        }
                    } id="counter">{this.state.queue.length}</button></td>
                <td className="table-info"><button type="button" className="btn btn-success btn-lg" style={{ width: '100%', height: '70px', align: 'center' }} onClick={() => this.handleDispatch({ preparation_time })} name="fill">{this.state.done}</button></td>
                <td className="table-dark align-middle"><h5 align="center" ></h5></td>
            </tr>
        )

    }
}

export default vending

