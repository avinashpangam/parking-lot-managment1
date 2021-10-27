import React, { Component } from 'react'



import { Container, Row, Col } from 'react-bootstrap'


//import  Icon from "@material-ui/core/Icon";

import { Card } from 'react-bootstrap'

import axios from 'axios'

import HomeNavBar from './../navigation/homeNavBar'
import UserKard from './../fragments/userKard'

export default class SearchVehicle extends Component {
    constructor(props) {
        super(props);
        this.state = {
            userId:'userId',
            userName:'userName',
            vehicleType:1,
            vehicleId:'vehicleId',
            floorNo:0,
            vehicles:[]
    };
    this.handleChange1 = this.handleChange1.bind(this);
    this.handleChange2 = this.handleChange2.bind(this);
    this.handleChange3 = this.handleChange3.bind(this);
    //this.handleChange4 = this.handleChange4.bind(this);
      }
      handleChange1(event){
          //event.preventDefault();
          this.setState({userId:event.target.value})
          console.log(this.state.userId);
          axios.get(`/SearchVehicle/userId/${this.state.userId}`).then(res=>{
            // console.log(res)
             this.setState({vehicles:res.data})
             console.log(this.state)
         }       
             )
      }
      handleChange2(event){
        //event.preventDefault();
        this.setState({vehicleId:event.target.value})
        console.log(this.state.vehicleId);
        axios.get(`/SearchVehicle/vehicleId/${this.state.vehicleId}`).then(res=>{
            // console.log(res)
             this.setState({vehicles:res.data})
             console.log(this.state)
         }       
             )
    }
    handleChange3(event){
        //event.preventDefault();
        this.setState({userName:event.target.value})
        axios.get(`/SearchVehicle/userName/${this.state.userName}`).then(res=>{
           // console.log(res)
            this.setState({vehicles:res.data})
            console.log(this.state)
        }       
            )
        console.log(this.state.userName);
    }
    
   

    render() {
        return (
            <div>
                <HomeNavBar/>
                <Card className="shadow p-3 mb-5 bg-white rounded" style={{ marginRight: '5rem', marginLeft: '15rem', marginTop: '1rem' }}>
                    <Card.Body>
                        <Container>
                            <Row style={{ marginLeft: '0em' }}>
                                <Col sm>
                                    userId:
                            </Col>
                                <Col>
                                    <input type="text" name="userId"
                                    value={this.state.userId}
                                    onChange={this.handleChange1}/>
                                </Col>
                            </Row>
                            <Row style={{ marginLeft: '0em' }}>
                                <Col sm>
                                    vehiclId:
                            </Col>
                                <Col>
                                    <input type="text" name="vehicleId"
                                    value={this.state.vehicleId}
                                    onChange={this.handleChange2} />
                                </Col>
                            </Row>
                            <Row style={{ marginLeft: '0em' }}>
                                <Col sm>
                                    userName:
                            </Col>
                                <Col>
                                    <input type="text" name="userName"
                                    value={this.state.userName}
                                    onChange={this.handleChange3} />
                                </Col>
                            </Row>
                           
                        </Container>
                    </Card.Body>
                </Card>

                <div>
                    {
                        this.state.vehicles.map((q)=>{
                            return(
                                <UserKard packet={q}/>
                            )
                        })
                    }
                </div>
            </div>
        )
    }
}
