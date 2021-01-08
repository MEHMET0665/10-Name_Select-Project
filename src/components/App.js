import React from 'react';
import { Select } from './Select';
import { Name } from './Name';

export class App extends React.Component {
  constructor(props){
    super(props)
    this.state={
      name:'Mehmet',
    }
   this.changeName=this.changeName.bind(this)
  }
  changeName=(ad)=>{
    this.setState({
      name:ad,
    })}
  render() {
    return (
      <div>
        <Select changeName={this.changeName}/>
        <Name name={this.state.name}/>
      </div>
    );
  }
}

