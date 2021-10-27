import React, { Component } from 'react'

import {Container,Row,Col} from 'react-bootstrap'

//Navbar
import HomeNavBar from './../navigation/homeNavBar'

//kard
import Kard1 from './../fragments/Kard1'
import Kard2 from './../fragments/Kard2'
import Kard3 from './../fragments/Kard3'

import './../../App.css'




import DashboardKard from './../fragments/dashboardKard'



export default class Dashboard extends Component {
    

    render() {
        return (
            <div>
                <HomeNavBar/>
                <div  style={{marginTop:'4.5rem',marginLeft:'10rem'}}>
                    <Container>
                    <Row>
                    <Col sm>
                    <Kard1/>
                    </Col>
                    <Col sm>
                    <Kard2/>
                    </Col>
                    <Col sm>
                    <Kard3/>
                    </Col>
                    </Row>
                    </Container>
                </div>
                <div style={{marginLeft: '8.5rem',marginTop: '2rem',}}>
                    <h1 style={{marginLeft: '4.5rem',}}>
                        Previously on our Parking Lot
                    </h1>
                </div>
                <div style={{marginTop:'3rem'}}>
                    <DashboardKard/>
                </div>
            </div>
        )
    }
}
