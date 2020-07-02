/** @format */
import React from 'react';
import { Table, Row } from 'react-bootstrap';
import iconDelete from '../../../img/icon-delete.png';
import axios from 'axios';
import './Table.css'
class DataKontrasepsi extends React.Component {
    state = {
        post: [],
    };

    componentDidMount() {
        axios.get('http://192.168.43.152:3001/list_kontrasepsi').then((result) => {
            this.setState({
                post: result.data,
            });
        });
    }

    handleRemove = (data) => {
        console.log(data);
        axios
            .delete(`http://192.168.43.152:3001/list_kontrasepsi/${data}`)
            .then((res) => {
                console.log(res);
            });
    };
    render() {
        return (
            <Row className="justify-content-md-center">
                <Table striped bordered hover size="sm" style={{ width: '30%' }}>
                    <thead style={{ textAlign: 'center' }}>
                        <tr>
                            <th style={{ width: '2%' }}>Id</th>
                            <th style={{ width: '20%' }}>Nama Provinsi</th>
                            <th style={{ width: '1%' }}>Action</th>
                        </tr>
                    </thead>
                    <tbody>
                        {this.state.post.map((post, id) => {
                            return (
                                <tr style={{ textAlign: 'center' }} key={id}>
                                    <td>{post.Id_Kontrasepsi}</td>
                                    <td>{post.Nama_Kontrasepsi}</td>
                                    <td>
                                        <img
                                            src={iconDelete}
                                            style={{ height: '20px' }}
                                            onClick={post.idmahasiswa}
                                        />
                                    </td>
                                </tr>
                            );
                        })}
                    </tbody>
                </Table>
            </Row>
        );
    }
}

export default DataKontrasepsi;