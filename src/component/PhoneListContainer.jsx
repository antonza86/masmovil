import React, { Component } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';
import { Jumbotron, Grid, Row, Col, Image, Button} from 'react-bootstrap';

import LoadingSpinner from './LoadingSpinner';

import './PhoneListContainer.css';


class PhoneListContainer extends Component {
  state = {
    phones: [],
    loading: true
  }

  componentDidMount() {
    axios.get('http://localhost:3001/phones')
      .then(res => {
        // const phones = res.data;
        this.setState(
          { 
            phones: res.data,
            loading: false
          }
        );
      })
  }

  render() {
    const { phones, loading } = this.state;
    return (
      <Grid>
        <Row className="show-grid text-center">
          {
            this.state.phones.map(phone => (
              <Col xs={12} sm={4} className="column" key={phone.model}>
                <h3>{phone.title}</h3>
                <Image src={phone.image} rounded />
                <br />
                <Link to={'/detail/' + phone.model }>
                  <Button bsStyle="primary">MORE INFO</Button>
                </Link>
              </Col>
            ))
          }
        </Row>
        {loading ? <LoadingSpinner /> : ''}
      </Grid>
    )
  }
}

export default PhoneListContainer;