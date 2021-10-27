import React from 'react'

//@material-ui

import axios from 'axios'

import {Card} from 'react-bootstrap'

let yesterday={
    bike:0,
    car:0,day:""
};
let day,a;

function func(props){
    console.log(props);
    if(props==="1"){
        day="Yesterday"
        a="From Yesterday"
    }
    else if(props==="2")
    {
        day="ThisWeek"
        a="This week"
    }
    else{
        day="ThisMonth"
        a="This month"
    }
 
 
    axios.get(`/DashBoard/${day}/${1}`).then(res=>{
     //console.log(res.data[0].count);
     yesterday.bike=res.data[0].count 
 })
 .catch(err=>console.log(err.response));
 
 
 axios.get(`/DashBoard/${day}/${2}`).then(res=>{
     //console.log(res.data[0].count);
     yesterday.car=res.data[0].count 
 })
 .catch(err=>console.log(err.response));

 yesterday.day=a;
 return yesterday;
}


const Kard=(props)=>{
   // console.log(props);
  
//console.log("y",yesterday)

        return (
            <div>
                <Card style={{width:'10rem',backgroundColor:'grey'}}>
                    <Card.Body>
                        <div style={{color:'white'}}>
                        <Card.Title>
                            {func(props.day).day}
                            {
                                console.log(func(props.day))
                            }
                        </Card.Title>
                        <br />
                        <Card.Title>
                            Bikes :{func(props.day).bike}
                        </Card.Title>
                        <Card.Title>
                            Cars :{func(props.day).car}
                        </Card.Title>
                        </div>
                    </Card.Body>
                </Card>
            </div>
        )
    }


    export default Kard;