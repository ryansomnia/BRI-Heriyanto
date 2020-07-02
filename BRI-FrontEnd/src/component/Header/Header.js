import React, { Component } from 'react';
//import imageBackground from './../../img/82.jpg';
import './Header.css'
const myStyle = {
    //  backgroundImage: `url( ${imageBackground} )`,
    backgroundColor: '#ffe0ac',
    height: '65vh',
    backgroundSize: 'cover'
}
class Header extends Component {

    render() {
        return (


            <header style={myStyle}>
                <h1>{this.props.title}</h1>
                <p>"Melayani dengan setulus hati"</p>
               
            </header>




        );


    }


};

export default Header