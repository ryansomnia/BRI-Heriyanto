/** @format */
import React from 'react';
import { Table, Row } from 'react-bootstrap';
import iconDelete from '../../../img/icon-delete.png';
import axios from 'axios';
import './Table.css'
class DataPemakai extends React.Component {
    state = {
        post: [],
    };

    componentDidMount() {
        axios.get('http://192.168.43.152:3001/list_pemakai_kontrasepsi').then((result) => {
            this.setState({
                post: result.data,
            });
        });
    }

    handleRemove = (data) => {
        console.log(data);
        axios
            .delete(`http://192.168.43.152:3001/list_pemakai_kontrasepsi/${data}`)
            .then((res) => {
                console.log(res);
            });
    };
    render() {
        return (
            <div>
                <h3>Tabel data Pemakai alat Kontrasepsi</h3>
                <Table striped bordered hover size="sm" style={{ width: '30%' }}>
                    <thead style={{ textAlign: 'center' }}>
                        <tr>
                            <th>Id</th>
                            <th>Id Propinsi</th>
                            <th>Id Kontrasepsi</th>
                            <th>Jumlah Pemakai</th>
                            <th>Action</th>
                        </tr>
                    </thead>
                    <tbody>
                        {this.state.post.map((post, id) => {
                            return (
                                <tr style={{ textAlign: 'center', }} key={id}>
                                    <td>{post.Id_List}</td>
                                    <td>{post.Id_Propinsi}</td>
                                    <td>{post.Id_Kontrasepsi}</td>
                                    <td>{post.Jumlah_Pemakai}</td>
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

            </div>
        );
    }
}

export default DataPemakai;