import React from 'react';

class NavBar extends React.Component {
 

  render() {
    return (
      
      <div className="col-md-12" style={{height:'100px'}}>
        <div className="row">
        <div className="col-md-1" style={{height:'100px'}}></div>
         <div className="col-md-10" style={this.style()}>
           <div className="col-md-12" style={{height:'100px',marginTop:'0px'}}>
              <h1 style={this.h1()}> To Do List </h1>
           </div>
         </div>
        <div className="col-md-1" style={{height:'100px'}}></div>
        </div>
        </div>
     
    );
  }
  style(){
      return {
          height:'100px',
          backgroundColor:'rgb(91, 83, 83)'

      }
  }
  h1(){
      return {
          fontWeight:'normal',
          color:'white',
          fontSize:'30px',
          marginLeft:'35%',
          marginTop:'30px'
      }
  }
  ulul(){
      return {
          border:'1px solid red',
          width:' 40%',
          marginTop:'20px'
      }
  }
  ul(){
      return {
          display:'inline-block',
          border:'1px solid red'
      }
  }
}
export default NavBar;