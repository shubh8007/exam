
import FruitService from "../services/FruitService";
import React,{Component} from "react";
import {Link} from "react-router-dom"
import { useState } from 'react';

class FormTable extends React.Component{
    constructor(props){
        super(props);
        this.state={fruit:[]}
    }

    fetchdata(){
        FruitService.getFruit().then((result)=>{
                   console.log(result.data)

                   this.setState({...this.state,fruit:result.data})
        }).catch((err)=>{
            console.log("error occured"+JSON.stringify(err))
        })
    }
    componentDidMount(){
        this.fetchdata();
    }
    deleteFruit=(fid)=>{
        FruitService.deleteFruit(fid).then(()=>{
            console.log("in deleteFru")
                this.fetchdata();
        })
       }
   render(){
    return(
        <div>
                    <table align="centre" border="2" color="orange">
                        <thead>
                            <th>Fid</th>
                            <th>FruitName</th>
                            <th>FruitColor</th>
                            <th>Quantity</th>
                            <th>Price</th>
                            <th>Action</th>
                        </thead>
                        <tbody>
                            {this.state.fruit.map((f)=>
                                <tr key={f.fid}>
                                 <td>{f.fid}</td>
                                 <td>{f.fname}</td>
                                 <td>{f.fcolor}</td>
                                 <td>{f.quantity}</td>
                                 <td>{f.price}</td>
                                 <td> <button type="button" id="btn" name="btn" value="btn" onClick={()=>{this.deleteFruit(f.fid)}}>Delete</button>
                                 <button type="button" id="btn" name="btn" value="btn" >Edit</button>
                                 
                                 </td>

                                </tr>
                            )}
                            <tr>

                            </tr>
                        </tbody>
                        <Link to="/fruitform"><button>AddFruit</button></Link>
                    </table>
                    
                </div>
    )
   }




}
export default FormTable;