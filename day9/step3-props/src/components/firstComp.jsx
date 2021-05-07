import  PropTypes from 'prop-types';
import {Component, version} from 'react';

class FirstComp extends Component{
    // static defaultProps = {
    //     title : "Default Comp Title"
    // }
    state = {
        power : 0
    }
    static propTypes = {
        title : PropTypes.string.isRequired,
        version : PropTypes.number
    }
    render(){
        return <div>
                    <h1>Hello from First Component</h1>
                    <article>{ this.props.title.length * 2 }</article>
                    <article>{ this.props.version }</article>
                    <h2>{ this.state.power }</h2>
                    <button onClick={ () => { this.setState({ power : this.state.power+1}) } }>Increase</button>
               </div>
    }
}
FirstComp.defaultProps = {
    title : "Static Comp Title"
}

export default FirstComp;

/*
<article>{ this.props.title || 'Default Title' }</article>
*/