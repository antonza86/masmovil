import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import { Jumbotron, Grid, Row, Col, Image, Button, Table} from 'react-bootstrap';

import LoadingSpinner from './LoadingSpinner';

import axios from 'axios';

import './PhoneDetailComponent.css';

class PhoneDetailComponent extends Component {
  state = {
    phone: {},
    loading: true
  }

  componentDidMount() {
    axios.get('http://localhost:3001/phones/' + this.props.match.params.model)
      .then(res => {
        this.setState(
          {
            phone: res.data,
            loading: false
          }
        );
      })
  }
  
  render(){
    const { phones, loading } = this.state;
    return (
      <Grid>
        {loading ? <LoadingSpinner /> : ''}
        <Link to="/">
          <Button bsStyle="primary" className="back_button" >Back</Button>
        </Link>
        <Jumbotron className={(loading ? 'hidden' : 'show')}>
          <h2>{ this.state.phone.title }</h2>
          <p>{ this.state.phone.description }</p>
          <Row className="show-grid text-center">
            <Col md={4} xs={12}>
              <Image src={ this.state.phone.image } rounded className="detail_image" />
            </Col>
            <Col md={8} xs={12}>
              <h2>Detalle</h2>
              <Table striped bordered condensed hover>
                <tbody>
                  <tr>
                    <td className="left_side">Color</td>
                    <td>{ this.state.phone.color }</td>
                  </tr>
                  <tr>
                    <td>Precio</td>
                    <td>{ this.state.phone.price }</td>
                  </tr>
                  <tr>
                    <td>Bateria</td>
                    <td>{ this.state.phone.battery }</td>
                  </tr>
                  <tr>
                    <td>Sistema operativo</td>
                    <td>{ this.state.phone.os }</td>
                  </tr>
                  <tr>
                    <td>Memoria Ram</td>
                    <td>{ this.state.phone.memory_ram }</td>
                  </tr>
                  <tr>
                    <td>Memoria</td>
                    <td>{ this.state.phone.memory }</td>
                  </tr>
                  <tr>
                    <td>Camera</td>
                    <td>{ this.state.phone.camera }</td>
                  </tr>
                  <tr>
                    <td>Processor</td>
                    <td>{ this.state.phone.processor }</td>
                  </tr>
                </tbody>
              </Table>
            </Col>
          </Row>
        </Jumbotron>
      </Grid>
    )
  }
}

export default PhoneDetailComponent