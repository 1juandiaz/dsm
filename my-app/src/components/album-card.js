import React, { Component } from "react";

class AlbumCard extends Component {

    render(){
        return <div className="col-sm-6 col-md-4">
            <div className="thumbnai">
                <img src={this.props.imageURL} alt="..."/>
            </div>
        </div>
    }
}

export default AlbumCard;