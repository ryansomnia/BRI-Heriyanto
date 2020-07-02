import React, { Component } from 'react';
//import imageBackground from './../../img/82.jpg';
import './Form.css'
import { Button, Col, Form } from 'react-bootstrap';
import axios from 'axios';

class FormData extends Component {
    constructor(props) {
        super(props);

        this.state = {
            Id_Propinsi: '',
            Id_Kontrasepsi: '',
            Jumlah_Pemakai: '',
        };
    }

    dataChange(event) {
        this.setState({
            [event.target.name]: event.target.value,
        });
    }

    postData(event) {
        event.preventDefault();
        const Id_Propinsi = this.state.Id_Propinsi;
        const Id_Kontrasepsi = this.state.Id_Kontrasepsi;
        const Jumlah_Pemakai = this.state.Jumlah_Pemakai;

        this.setState({
            loading: true,
        });

        const data = {
            Id_Propinsi,
            Id_Kontrasepsi,
            Jumlah_Pemakai,
        };

        axios
            .post('http://192.168.43.152:3001/list_pemakai_kontrasepsi', data)
            .then((response) => {
                alert('success');
            })
            .catch((err) => {
                console.log(err);
            });
    }

    render() {
        return (

            <Col md={{ span: 4, offset: 4 }}></Col>
            <div>
                <Form onSubmit={this.postData.bind(this)}>
                    <Form.Group>
                        <Form.Label>ID Provinsi</Form.Label>
                        <Form.Control
                            type="number"
                            placeholder="Provinsi"
                            id="Id_Propinsi"
                            onChange={this.handleFormChange}
                            name="Id_Propinsi"
                            value={this.state.Id_Propinsi}
                            onChange={this.dataChange.bind(this)}
                        />
                    </Form.Group>

                    <Form.Group>
                        <Form.Label>Jumlah Pemakai</Form.Label>
                        <Form.Control
                            type="number"
                            placeholder="Jumlah Penggunaan"
                            onChange={this.handleFormChange}
                            id="Jumlah_Pemakai"
                            name="Jumlah_Pemakai"
                            value={this.state.Jumlah_Pemakai}
                            onChange={this.dataChange.bind(this)}
                        />

                        <Form.Group controlId="formBasicEmail">
                            <Form.Label>Jumlah Pemakaian</Form.Label>
                            <Form.Control type="text" placeholder="Enter Text..." />

                        </Form.Group>


                        <Button variant="primary" type="submit">
                            Save
  </Button>
                </Form>




        );


    }


};

export default FormData