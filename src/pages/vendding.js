import React from "react";
import ProductList from '../components/ProductList'
import Bienvenida from '../components/bienvenida'
import Loading from "../components/loading";
import Error  from "./500";
import '../components/styles/vending.css'
class Vendding extends React.Component{

        state = {
            data:[],
            loading:true,
            error:null
        }
        async componentDidMount(){
            await this.fetchProducts()
        }
        fetchProducts = async () =>{
            try {
                let res = await fetch('https://vending-machine-test.vercel.app/api/products')
                let data = await res.json()
                this.setState({
                    data:data["data"],
                    loading:false
                })
            }
            catch (error) {
                this.setState({
                    loading:false,
                    error
                })
            }
            

        }
    render(){
        if(this.state.loading)
          return<Loading />
        if(this.state.error)
          return<Error />
        return (
            <div>
                <div align="center">
                  <Bienvenida
                    username={["Customer"]}
                  />
                </div>
                <div className ="container">
                    <div className= "row align-items-start" >
                        <div className="col">
                        <table className="table table-striped table-dark">
                            <thead align="center">
                                <tr className="stick">
                                    <th>Product</th>
                                    <th>Name</th>
                                    <th>Preparation (Secs)</th>
                                    <th>Req</th>
                                    <th>Done</th>
                                    <th>Disp</th>
                                </tr>
                            </thead>
                            <ProductList
                                products={this.state.data}
                            /> 
                        </table>
                        </div>
                        
                    </div>
                </div>
            </div>
        )
    }
}
export default Vendding