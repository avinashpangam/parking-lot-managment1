import React, { Component } from 'react'



import { Card } from 'react-bootstrap'
import axios from 'axios';

import { Container, Row, Col } from 'react-bootstrap'



const pc="https://icon-library.net/images/windows-8-user-icon/windows-8-user-icon-10.jpg";

export default class DashboardKard extends Component {
    state = {
        users: []
    }
    componentDidMount() {
        axios
            .get("/history")
            .then(res => {
                this.setState({ users: res.data })

            })
    };

    
    render() {
        return (
            <div>
                {
                    this.state.users.map((data,index)=>{
                        //console.log(data);
                        return(
                            <Card className="shadow p-3 mb-5 bg-white rounded" style={{ marginRight: '5rem', marginLeft: '15rem', marginTop: '1rem' }}>
                    <Card.Body>
                        <Container>
                            <Row>
                            <Col sm>
                            <img src={pc} alt="user" style={{width:'8rem',height:'8rem',borderRadius:'4rem'}}/>
                            </Col>
                            <Col sm>
                            <Row>Username:    {data.userName}</Row>
                            <Row>vehicleType: {data.vehicleType}</Row>
                            <Row>InTine:        {data.inTime}</Row>
                            <Row>OutTime:        {data.outTime}</Row>
                            </Col>
                            </Row>
                        </Container>
                    </Card.Body>
                </Card>
                        )
                    })
                }
            </div>
        )
    }
}
