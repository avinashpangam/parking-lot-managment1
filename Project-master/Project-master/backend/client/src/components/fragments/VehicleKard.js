import React, { Component } from 'react'



import { Container, Row, Col } from 'react-bootstrap'


//import  Icon from "@material-ui/core/Icon";

import { Card } from 'react-bootstrap'

import axios from 'axios'


export default class VehicleKard extends Component {
    constructor(props) {
        super(props);
        this.state = {
            userId:'userId',
            userName:'userName',
            vehicleType:1,
            vehicleId:'vehicleId',
            floorNo:0
    };
    this.handleChange1 = this.handleChange1.bind(this);
    this.handleChange2 = this.handleChange2.bind(this);
    this.handleChange3 = this.handleChange3.bind(this);
    this.handleChange4 = this.handleChange4.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
      }
      handleChange1(event){
          //event.preventDefault();
          this.setState({userId:event.target.value})
          //.log(this.state.userId);
      }
      handleChange2(event){
        //event.preventDefault();
        this.setState({vehicleId:event.target.value})
        //console.log(this.state.vehicleId);
    }
    handleChange3(event){
        //event.preventDefault();
        this.setState({userName:event.target.value})
       // console.log(this.state.userName);
    }
    handleChange4(event){
        //event.preventDefault();
        this.setState({vehicleType:event.target.value})
        //console.log(this.state.vehicleType);
    }
    handleSubmit(event){
       // console.log(this.state);
        //let a;
        axios.get(`/Block/check/${this.state.vehicleType}`).then(res=>{
            console.log(res)
            if(res.status===300)
            {
                alert("No vacancies")
                return;
            }
            else{ 
                let a=res.data;
               // console.log(a);
                axios.post(`/timeLine/${a}`,this.state).then(res=>{
                    if(res.status===200){
                        alert("User Inserted");
                        this.setState  ({
                            userId:'userId',
                            userName:'userName',
                            vehicleType:1,
                            vehicleId:'vehicleId'
                    });
                    }
                }).catch(err=>console.log(err.response));
            }
        })
        
        

    }
    render() {
        return (
            <div>
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
                            <Row style={{ marginLeft: '0em' }}>
                                <Col sm>
                                    vehicleType:
                            </Col>
                                <Col>
                                    <input type="text" name="vehicleType"
                                    value={this.state.vehicleType}
                                    onChange={this.handleChange4} />
                                </Col>
                            </Row>
                            <Row>
                                <Col sm>
                                    <button onClick={this.handleSubmit}>
                                        Add
                            </button>
                                </Col>
                            </Row>
                        </Container>
                    </Card.Body>
                </Card>
            </div>
        )
    }
}
