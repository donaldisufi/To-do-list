import React from 'react';


class Listat extends React.Component {
  
  state = {num:0};
 style(){
   return{
  backgroundColor:'rgb(189, 184, 184)',
  border:'2px solid rgb(223, 210, 210)',
  borderRadius:'10px'
   }
};

Click=(e)=>{
  this.setState({num :this.state.num+1});
  if(this.state.num % 2 === 0){
 
  document.getElementById(`${e.target.id}`).style.color='green';
  }else{
    document.getElementById(`${e.target.id}`).style.color='white';
  }
}

 render(){ 
   let x = this.props.id + 5;
  return (
    <div id={x} className="col-md-12" style={{ height:'60px',marginTop:'0',marginBottom:'15px'}}>
    <div className="row" style={{height:'60px'}}>
      <div className="col-md-1" style={{height:'60px'}} ></div>
      <div className="col-md-10" style={this.style()}>
         <div className="row">
           <div className="col-md-10">
             <p style={{marginLeft:'20px',marginTop:'15px',fontSize:'20px'}}>
               {this.props.value}
               </p> 
           </div>
           <div className="col-md-2">
           <div className="row">
             <div className="col-md-6" >
             <button onClick={event=>{
               this.props.index(event.target.id);
              
              }
            } className="btn btn-danger" style={{marginTop:'10px'}} id={this.props.id}>Delete </button>
              </div>
               <div className="col-md-6" style={{paddingTop:'15px'}}>
                  <a>
                     <i onClick={this.Click} id={this.props.id+10} style={{fontSize:'35px',color:'white'}} className="check circle outline icon"></i>
                     </a>
               </div>
            </div>
           </div>
         </div>
      </div>
      <div className="col-md-1" style={{height:'60px'}}></div>
      </div>
    </div>
  );

}
}

export default Listat;