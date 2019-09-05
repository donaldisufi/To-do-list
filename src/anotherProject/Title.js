import React,{Component} from 'react';


export default class Title extends Component{
    render(){
        return(
            <div className="col-md-12" style={{height:'200px',display:'flex',justifyContent:'center',alignItems:'center'}}>
                <div className="col-md-8" style={{height:'120px',border:'1px solid gray',backgroundColor:'lightgray',display:'flex',justifyContent:'center',alignItems:'center'}}>
                      <h1>
                           Luaj Lojen Shim sham shung
                      </h1>
                </div>
            </div>
        )
    }
}