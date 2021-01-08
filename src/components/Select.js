import React from 'react';
import {names} from './names'
import {wishes} from './wishes';
export class Select extends React.Component {
  constructor(props){
    super(props)
 
   this.handleChange=this.handleChange.bind(this)
 }
  
  handleChange(e){
    this.props.changeName(e.target.value)
      }
  render() {
    console.log(names)
    return (
      <div>
        <h1>Pickup a name :</h1>
        <select id="great-names" onChange={this.handleChange}>
          {names.map(item=>{
            return <option value={item}>{item}</option>
          }
          )}
          </select>
          <p>{wishes[Math.floor(Math.random()*wishes.length)]}</p>
      </div>
    );
  }
}