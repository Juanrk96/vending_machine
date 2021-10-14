import React, { Component } from 'react'
class Timer extends Component{
    render(){
        const {timer} = this.props;
            return (

            <div className="container">
                <div className="row align-items-start">
                    <div className="col">
                        <h1>{timer}</h1>
                    </div>
                    </div>
                </div>
            );

    }
}

export default Timer