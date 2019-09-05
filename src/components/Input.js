import React from 'react';


class Input extends React.Component{
   
  state ={
    text :'',
  }

    Click=(element)=>{ 
      this.props.hello(this.state.text);
      this.setState({text:''})
      
    }
      


    render(){
      
      return (
        <div className="col-md-12">
        <div className="row" style={{height:'70px'}}>
          <div className="col-md-1" style={{height:'80px'}}></div>
           <div className="col-md-10" style={{height:'100px'}}>
             <div className="row">
              <div className="col-md-10" style={{marginTop:'10px'}}>
               <form onSubmit={(e)=>{
                 e.preventDefault();
                 this.Click();
               }
               }>
               <input value={this.state.text} onChange={e=>{this.setState({text:e.target.value})}} type="text" style={this.inputi()} className="form-control" placeholder="Type here ..."/>
               </form>
             </div>
             <div className="col-md-2" style={{height:'100px'}}>
                <button onClick={this.Click} style={{marginTop:'10px'}} className="btn btn-info">Add</button>
             </div>
             </div>
           </div>
            <div className="col-md-1" style={{height:'100px'}}></div>
          </div>
        </div>
        
      );

    }
   inputi(){
       return {
      
       }
   }

}
export default Input;;