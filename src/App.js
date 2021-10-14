import React from "react";
import { BrowserRouter, Route, Switch} from 'react-router-dom'
import Vendding from './pages/vendding'
//import VenddingNew from './pages/venddingnew'
import NotFound from './pages/notFound'

const App =() => (

    <BrowserRouter>
        <Switch>
        <Route exact path="/" component={Vendding} />
        <Route exact path="/vendding" component={Vendding} />
        <Route component = {NotFound}></Route>
        </Switch>
    </BrowserRouter>
)



export default App