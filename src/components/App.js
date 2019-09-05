import React from 'react';
import NavBar from './NavBar';
import Input from './Input';
import Listat from './Listat';

class App extends React.Component {
  
 constructor(props){
   super(props);
   this.state= {
    arr:[],
    index:[true,null]
  };
  this.show= [];
 }
  
data=(value)=>{

  this.setState({arr:[value, ...this.state.arr]});
    
 
}
index=(val)=>{
  
    var array = this.state.arr;
     array.splice(val,1);
     this.setState({
       arr:array,
     })
  

}

  


  render(){

      return(
          <div className="row">
             <NavBar />
             <Input hello={this.data} />
             {this.state.arr.map((value,index)=>{
              
                 return <Listat index={this.index} array={this.state.arr} value={value} id={index} />

             }
             )}
            
             </div>
      );
  }

}
export default App;