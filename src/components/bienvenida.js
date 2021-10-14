import React from 'react';
import './styles/vending.css'
import 'bootstrap/dist/css/bootstrap.css'
//import { Link } from 'react-router-dom';

const Bienvenida = (props) =>(
    <div className="container">
        <div className="row align-items-start">
            <div className="col">
                <h1>Hi {props.username}</h1>
                <p>Wanna buy something?</p>
            </div>
            </div>
        </div>
)


export default Bienvenida