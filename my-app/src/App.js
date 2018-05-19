import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import './components/item-lista'
import ItemLista from "./components/item-lista";

class App extends Component {

    constructor(props) {
        super(props);
        this.state = {isToggleOn: true};
        //Estado del componente y se cambia con el setState UNICA FORMA
        this.handleClick = this.handleClick.bind(this);
    // this es una variable que puede elegir que valgo distinto que otros lenguajes que es la referencia a un objecto
    // bind es necesario para poder usar el estado
    }
    handleClick() {
        this.setState(prevState => ({
            isToggleOn: !prevState.isToggleOn
        }));
    }
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
            <div>Welcome</div>
          <ul> {this.props.name.map((item, index) =>
           <ItemLista value={item} id={index} /> )};
          </ul>
        </header>
        <p className="App-intro">
          To get started, edit <code>src/App.js</code> and save to reload.
        </p>
          <button onClick={this.handleClick}>{this.state.isToggleOn ? 'ON' : 'OFF'}</button>
      </div>
    );
  }
}

export default App;
