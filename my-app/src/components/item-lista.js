import React, { Component } from "react";

class ItemLista extends Component {

    render(){
        return <li> {this.props.value + " " +this.props.id+ " " } </li>
    }
}

export default ItemLista;

