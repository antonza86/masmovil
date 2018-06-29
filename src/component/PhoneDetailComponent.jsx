import React from 'react'
import { Link } from 'react-router-dom'
import { Jumbotron, Grid, Row, Col, Image, Button} from 'react-bootstrap';

import './PhoneDetailComponent.css';

const PhoneDetailComponent = (props) => {
  console.log(props.match.params.model)
  return (
    // <div>
    //   <h1>{ props.match.params.model }</h1>
    //   <Link to='/'>Back</Link>
    // </div>
    <Grid>
      <Row className="show-grid text-center">
      <h1>{ props.match.params.model }</h1>
        {/* {
          this.state.phones.map(phone => (
            <Col xs={12} sm={4} className="column">
              <h3>{phone.title}</h3>
              <Image src={phone.image} rounded />
              <br />
              <Link to={'/detail/' + phone.model }>
                <Button bsStyle="primary">MORE INFO</Button>
              </Link>
            </Col>
          ))
        } */}
      </Row>
    </Grid>
  )
}

export default PhoneDetailComponent