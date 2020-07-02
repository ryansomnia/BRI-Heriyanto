import React, { Component } from 'react';
//import imageBackground from './../../img/82.jpg';
import Header from '../Header/Header';
import Navigation from '../Navigation/Navigation';

class Home extends Component {

    render() {
        return (

            <div>

                <Navigation logoTitle="BRI Life" />
                <Header title="Wellcome to our System" />

            </div>
        );
    }
};

export default Home;