import React,{Component} from 'react';
import FigComponent from './FigComponent';

export default class Container extends Component {
   
   state={
       loading:false,
       result:null,
       kompjuteri:'',

   }
   reload(){
       window.location.reload(true);
   }
    render(){
        return(
        <div className="col-md-12" style={{height:'400px',border:'1px solid gray'}} >
          <div className="row">
                    <div className="col-md-12" style={{height:'50px',display:'flex',justifyContent:'center',alignItems:'center'}}>
                        <p>
                            Per te luajtur lojen klikoni mbi figuren qe deshironi te Zgjidhni dhe menjeher kompjuteri do zjedh nje figur random dhe do tregohet fituesi 
                        </p>
                    </div>    
                    {this.state.loading?<div className="col-md-12" style={{display:'flex',justifyContent:'center',alignItems:'center'}}>
                        <h1>
                            Prisni
                        </h1>
                    </div>:this.state.result!=null?<div className="col-md-12" style={{display:'flex',justifyContent:'center',alignItems:'center'}}> 
                        {this.state.result ===0?<div><h1>Barazim Sepse Kompjuteri Zgjodhi {this.state.kompjuteri} </h1><button className="btn btn-danger" onClick={this.reload}>Luaj Perseri</button></div>:this.state.result===1?<div><h1>Urime Keni Fituar ,Kompjuteri Zgjodhi {this.state.kompjuteri}</h1><button className="btn btn-danger" onClick={this.reload}>Luaj Perseri</button></div>:<div><h1>Keni humbur , Kompjuteri Zgjodhi {this.state.kompjuteri}</h1><button className="btn btn-danger" onClick={this.reload}>Luaj Perseri</button></div>}
                      </div>:<div className="col-md-12 row">    
                        <FigComponent classname="btn btn-info" name="Gur" onCLick={()=>{
                            this.setState({loading:true})
                           setTimeout(()=>{
                            let num =  Math.floor(Math.random()*3+1);
                            if(num===1){
                                this.setState({result:0,kompjuteri:'Gur'})
                            }else if (num===2){
                                this.setState({result:-1,kompjuteri:'Leter'})
                            }else {
                                this.setState({result:1,kompjuteri:'Gersher'})
                            }
                            this.setState({loading:false})
                           },1000);
                        }} />
                        <FigComponent classname="btn btn-danger" name="Leter" onCLick={()=>{
                            this.setState({loading:true})
                           setTimeout(()=>{
                            let num =  Math.floor(Math.random()*3+1);
                            if(num===1){
                                this.setState({result:1,kompjuteri:'Gur'})
                            }else if (num===2){
                                this.setState({result:0,kompjuteri:'Leter'})
                            }else {
                                this.setState({result:-1,kompjuteri:'Gersher'})
                            }
                            this.setState({loading:false})
                           },1000);
                        }} />
                        <FigComponent classname="btn btn-info"  name="Gersher"onCLick={()=>{
                            this.setState({loading:true})
                            this.setState({loading:true})
                           setTimeout(()=>{
                            let num =  Math.floor(Math.random()*3+1);
                            if(num===1){
                                this.setState({result:-1,kompjuteri:'Gur'})
                            }else if (num===2){
                                this.setState({result:1,kompjuteri:'Leter'})
                            }else {
                                this.setState({result:0,kompjuteri:'Gersher'})
                            }
                            this.setState({loading:false})
                           },1000);
                           
                        }} />
                </div>}
          </div>
        </div>)
    }
}   