import React from 'react';
import ReactDOM from 'react-dom';
/*
Inside JSX
attributes
use className attribute instead of class attribute
use htmlFor instead of for attribute
use defaultValue instead of for value to use an uncontrolled input
use onClick instead of onclick attribute
use onChange instead of onchange attribute
use onInput instead of oninput attribute

tags
close orphan tags inline or have a closing tag
use a single root tag or wrap them in empty tag or React.Fragment tag;

*/
let elm = <>
  <div>
            <h1> Welcome to your life </h1>
            <section>
              <article className="boxer">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam iaculis aliquam nunc, nec lacinia tellus dapibus a. Duis congue dictum nunc, non tempus est congue sit amet. Fusce hendrerit nibh quis nibh convallis, quis tincidunt est blandit. Donec id erat est. Aenean semper lacus hendrerit, pretium orci quis, molestie ante. Donec a porttitor arcu. Nullam tempor faucibus est ut iaculis. In hac habitasse platea dictumst. Sed bibendum facilisis tellus ac lobortis.
              </article>
              <hr/>
              <br/>
              <img/>
              <input/>
              <article className="boxer">
                Fusce eros sem, ultricies ut ex sed, placerat tempus enim. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. In risus ante, consectetur ut diam sit amet, consectetur facilisis ipsum. Curabitur massa ante, rhoncus a metus vel, lobortis efficitur erat. Ut semper sem id sapien pretium ultrices. Nullam consectetur posuere velit, eu consectetur mi finibus non. Phasellus sit amet leo vel purus commodo condimentum. Aenean venenatis tortor nec est mollis, a imperdiet massa tempus. Vestibulum eu nisl non nisl sollicitudin porttitor et ut odio. Cras auctor et massa non sodales. Nunc eget nunc non metus auctor lobortis. 
              </article>
            </section>
          </div>
          <div>
            <h2>Intruder</h2>
            <label htmlFor="uname">User Name : </label>
            <input defaultValue="" id="uname" type="text"/>
          </div>
</>

ReactDOM.render(elm,document.getElementById('root'));