import React, { Component } from 'react';
import ReactDOM from 'react-dom';

class HeaderComp extends Component{
  render(){
    return <header> HEADER </header>
  }
}
class MainComp extends Component{
  render(){
    return <main>
              <ArticleComp/>
              <ArticleComp/>
          </main>
  }
}
class ArticleComp extends Component{
  render(){
    return <article> welcome to your life there's no turning back  </article>
  }
}
class FooterComp extends Component{
  render(){
    return <footer> Footer </footer>
  }
}

class MainComponent extends Component{
  render(){
    return<div>
            <HeaderComp/>
            <MainComp/>
            <FooterComp/>
        </div>
  }
}

ReactDOM.render(<MainComponent/>,document.getElementById('root'));