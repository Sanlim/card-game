import React, { Component } from 'react';
import CharacterCard from "./CharacterCard";

export default class WorldCard extends Component{
    activationHandler = c => {console.log(`${c} has been activated.`)} 
    <CharacterCard value={c} key={i} activationHandler={this.activationHandler}/>
    render() {
        return (
            <div>
                { Array.from(this.props.value).map((c,i) => <CharacterCard value={c} key={i}/>)}
            </div>
        );
    }

}