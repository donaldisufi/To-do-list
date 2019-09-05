import React,{Component} from 'react';

export default class FigComponent extends Component{
    render(){
        return(
            <div className="col-md-4" style={{height:'300px',display:'flex',justifyContent:'center',alignItems:'center'}}>
               <button className={this.props.classname} style={{height:'100px',width:'100px',fontSize:'20px'}} onClick={this.props.onCLick}>
                 {this.props.name}
               </button>
            </div>
        )
    }
}