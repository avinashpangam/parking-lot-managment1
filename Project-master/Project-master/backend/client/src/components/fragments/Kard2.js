import React, { Component } from 'react'


import axios from 'axios'

import {Card} from 'react-bootstrap'

//let a,b;

export default class Kard1 extends Component {
    state={
        c:0
    }
    componentDidMount() {
        axios
            .get("/DashBoard/ThisWeek")
            .then(res => {
                console.log(res.data[0].count)
                this.setState({c:res.data[0].count})
            })
            
            
    };


    render() {
        return (
            <div>
                <Card style={{width:'10rem',backgroundColor:'grey'}}>
                    <Card.Body>
                        <div style={{color:'white'}}>
                        <Card.Title>
                            This week
                        </Card.Title>
                        <br />
                        <Card.Title>
                            Total Number of vehicles :{this.state.c}
                        </Card.Title>
                        </div>
                    </Card.Body>
                </Card>
            </div>
        )
    }
}
