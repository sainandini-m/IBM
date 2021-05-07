import React, { Component } from 'react';
import ReactDOM from 'react-dom';

let justiceLeague = ['Batman', 'Superman', 'Aquaman', 'Wonder Woman', 'Flash', 'Cyborg'];

// let elm = <ol>
//             { justiceLeague.map(function(val, idx, arr){
//               return <li key={ idx }> { val } </li>
//             }) }
//           </ol>

// function Element(props){
//   return <li> { props.heroname }</li>
// }

// function Elements(){
//   return <ol>
//            { justiceLeague.map(function(val, idx, arr){
//              return <Element key={idx} heroname={val}/>
//            }) }
//          </ol>
// }

// class Element extends Component{
//   render(){
//     return <li>{ this.props.heroname }</li>
//   }
// }

// class Elements extends Component{
//   justiceLeague = ['Batman', 'Superman', 'Aquaman', 'Wonder Woman', 'Flash', 'Cyborg'];
//   render(){
//     return <ol>
//             { this.justiceLeague.map(function(val, idx, arr){
//               return <Element heroname={val} />
//             }) }
//           </ol>
//   }
// }

class ListComponent extends Component{
  render() {
    return <ol>
            {
              this.props.list.map(function(val, idx){
                return <li key={ idx }>{ val }</li>
              })
            }
          </ol>
  }
}

class MainComponent extends Component{
  avengers = ['Ironman','Hulk', 'Doctor Strange'];
  justiceLeague = ['Batman','Superman', 'Cat Women', 'Flash'];
  render(){
    return<div>
            <h1>Heroes Application</h1>
            <ListComponent list={this.avengers}/>
            <hr/>
            <ListComponent list={this.justiceLeague}/>
          </div>
  }
}

ReactDOM.render(<MainComponent/>,document.getElementById('root'));