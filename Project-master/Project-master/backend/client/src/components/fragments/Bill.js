import React from 'react';


import axios from 'axios'

import {Card} from 'react-bootstrap'



const Bill=()=>{
    
    return(
        <div>
                <Card style={{width:'10rem',backgroundColor:'grey'}}>
                    <Card.Body>
                        <div style={{color:'white'}}>
                        <Card.Title>
                            From Yesterday
                        </Card.Title>
                        <br />
                        <Card.Title>
                            Total Number of vehicles :
                        </Card.Title>
                        </div>
                    </Card.Body>
                </Card>
            </div>
    )
}