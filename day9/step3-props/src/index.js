import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import FirstComp from './components/firstComp';

class MainComp extends Component{
    render(){
        return <div>
                    <FirstComp title="Index Title" version={1001} />
                    <FirstComp title="Index Title" version={1001} />
                </div>
    }
}

ReactDOM.render(<MainComp/>,document.getElementById('root'));