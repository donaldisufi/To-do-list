import React,{Component} from 'react';
import Title from './Title';
import Container from './Container';

export default class App2 extends Component {
 render(){
        return(
            <div className="row">
             <Title />
             <Container />
            </div>
        )
    }
}
