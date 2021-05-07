import React from 'react';
import ReactDOM from 'react-dom';
import Elements from './elements';


// let webpage = <h1> Welcome to your life !!! </h1>;

// let box = React.createElement("div",null,
// React.createElement("h1",null, "Welcome to youre life 1"),
// React.createElement("h1",null, "Welcome to youre life 2")
// )

// let element = <div>
//   <h1>Welcome to your life 1</h1>
//   <h1>Welcome to your life 2</h1>
// </div>

// function Element(){
//   return <li>Welcome to your life 1</li>
// }

// function Elements(){
//   return <ul>
//           <Element/>
//           <Element/>
//           <Element/>
//           <Element/>
//           <Element/>
//           <Element/>
//         </ul>
// }



ReactDOM.render(<Elements/>,
  document.getElementById('root')
);