/** @format */
import React from 'react';
import { Table } from 'react-bootstrap';
import iconDelete from '../../../img/icon-delete.png';
import axios from 'axios';
import './Table.css'
class DataPropinsi extends React.Component {
    state = {
        post: [],
    };

    componentDidMount() {
        axios.get('http://192.168.43.152:3001/list_propinsi').then((result) => {
            this.setState({
                post: result.data,
            });
        });
    }

    handleRemove = (data) => {
        console.log(data);
        axios
            .delete(`http://192.168.43.152:3001/list_propinsi/${data}`)
            .then((res) => {
                console.log(res);
            });
    };
    render() {
        return (

            <div>
                <h3>Tabel data Propinsi</h3>
                <Table>
                    <thead >
                        <tr>
                            <th>Id</th>
                            <th>Nama Provinsi</th>
                            <th>Action</th>
                        </tr>
                    </thead>
                    <tbody>
                        {this.state.post.map((post, id) => {
                            return (
                                <tr key={id}>
                                    <td>{post.id_propinsi}</td>
                                    <td>{post.nama_propinsi}</td>
                                    <td>
                                        <img
                                            src={iconDelete}
                                            onClick={post.id_propinsi}
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

export default DataPropinsi;