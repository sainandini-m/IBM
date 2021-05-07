import { Component } from "react";
import Elm from "./element";

export default class Elements extends Component{
    render() {
      return <ol>
              <Elm/>
              <Elm/>
              <Elm/>
              <Elm/>
              <Elm/>
            </ol>;
    }
  }