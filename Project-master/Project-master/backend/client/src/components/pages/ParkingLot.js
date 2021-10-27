import React, { Component } from 'react'
import HomeNavBar from "./../navigation/homeNavBar";

import UserKard from './../fragments/userKard'


import axios from 'axios'

export default class ParkingLot extends Component {
    state={
        users:[]
    }
    componentDidMount(){
        axios
        .get("/timeLine")
        .then(res=>{
            this.setState({users:res.data})
    
        })

       
    }
    render() {
        return (
            <div>
                <HomeNavBar/>
                <div>
                {
                    this.state.users.map(person=>{
                        return(
                            <UserKard packet={person}/>
                        );
                    })
                }
                </div>
            </div>
        )
    }
}


/*

async(data)=>{
            try{
                const people= await data.json();
            this.setState({users:people});
            console.log(await people);
        
            }
            catch(e){
                return e;
            }
        }


        */