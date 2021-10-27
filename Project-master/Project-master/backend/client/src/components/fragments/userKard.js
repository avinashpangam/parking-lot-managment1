import React from 'react'


import { Container, Row, Col } from 'react-bootstrap'

//import {Route} from 'react-router-dom'
//import  Icon from "@material-ui/core/Icon";

//import Bill from './Bill'

import { Card } from 'react-bootstrap'
import axios from 'axios';

const pc="https://icon-library.net/images/windows-8-user-icon/windows-8-user-icon-10.jpg";

async function getUser(props){
    //let a;
   //let a=
   return await axios
    .get(`/timeLine/${props.orderId}`)
}


async function buttonHandler (props){
    let user=await getUser(props)
    user=await user.data;
    axios
    .post(`/timeLine/delete/${user.orderId}`)
    .then(res=>console.log(res))
    .catch(err=>console.log(err.response));

    axios
    .get(`/Bill/${user.orderId}`)
    .then(async res=>{
        let a;
        a=await res.data;
        console.log(res.data);

        alert("Billing amout: ",a," units ","Visit Soon!!!")
    })
}

const UserKard =(props)=> {
  const data=props.packet;

        return (
            <div>
                <Card className="shadow p-3 mb-5 bg-white rounded" style={{ marginRight: '5rem', marginLeft: '15rem', marginTop: '1rem' }}>
                    <Card.Body>
                        <Container>
                            <Row>
                            <Col sm>
                            <img src={pc} alt="user" style={{width:'8rem',height:'8rem',borderRadius:'4rem'}}/>
                            </Col>
                            <Col sm>
                            <Row>{data.userName}</Row>
                            <Row>{data.orderId}</Row>
                            <Row>{data.vehicleType}</Row>
                            <Row>{data.inTime}</Row>
                            </Col>
                            <Col sm>
                            <button onClick={()=>buttonHandler(data)}>
                                EXIT
                            </button>
                            </Col>
                            </Row>
                        </Container>
                    </Card.Body>
                </Card>
            </div>
        )
    }


export default UserKard;

/*

                      <Card.Title>
                            Yesterday
                        </Card.Title>
                        <br />
                        <Card.Title>
                            Bikes count
                        </Card.Title>
                        <Card.Title>
                            Cars count
                        </Card.Title>


                        */