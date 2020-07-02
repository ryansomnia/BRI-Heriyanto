import React, { Component, useRef } from 'react';
import { Table, Row, Button } from 'react-bootstrap';
import axios from 'axios';
//import imageBackground from './../../img/82.jpg';
import './Report.css'
// import jsPDF from 'jspdf';
import { useReactToPrint } from 'react-to-print';
class Report extends Component {

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
    componentDidMount() {
        axios.get('http://192.168.43.152:3001/list_propinsi').then((result) => {
            this.setState({
                post: result.data,
            });
        });
    }
    render() {
        return (
            <Table>
                <thead>
                    <tr>
                        <th>No</th>
                        <th>Propinsi</th>
                        <th>Pil</th>
                        <th>Kondom</th>
                        <th>IUD</th>
                        <th>Jumlah</th>
                    </tr>
                </thead>
                <tbody>
                    {this.state.post.map((post, id) => {
                        return (
                            <tr key={id}>
                                <td>{post.id_propinsi}</td>
                                <td>{post.nama_propinsi}</td>
                                <td>{post.Nama_Kontrasepsi}</td>
                                <td>{post.Nama_Kontrasepsi}</td>
                                <td>{post.Nama_Kontrasepsi}</td>
                                <td></td>
                            </tr>
                        );
                    })}
                </tbody>
            </Table>
        );
    }
}
const Example = () => {
    const componentRef = useRef();
    const handlePrint = useReactToPrint({
        content: () => componentRef.current,
    });

    return (
        <div>
            <Report ref={componentRef} />
            <div style={{ display: "none" }}><Report ref={componentRef} /></div>
            <Button onClick={handlePrint}>Print this out!</Button>
        </div>
    );
};
export default Report