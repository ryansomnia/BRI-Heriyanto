import React, { Component } from 'react';
//import imageBackground from './../../img/82.jpg';
import Navigation from '../Navigation/Navigation';
import TablePropinsi from '../Table/propinsi/Table';
import TablePemakai from '../Table/pemakai/Table';
import TabelKontrasepsi from '../Table/kontrasepsi/Table';

import FormData from '../Form/Form'
import Report from '../Report/Report';
class Home extends Component {

    render() {
        return (

            <div>
                <Navigation logoTitle="BRI Life" />

                <TablePropinsi />
                <TablePemakai />
                <TabelKontrasepsi />
                <Report />
                <FormData />

            </div>
        );
    }
};

export default Home;