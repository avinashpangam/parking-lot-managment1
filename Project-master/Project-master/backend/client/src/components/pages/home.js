import React, { Component } from 'react'

//Top NavBar
import HomeNavBar from './../navigation/homeNavBar' 


export default class Home extends Component {
    render() {
        return (
            <div>
                <HomeNavBar/>

                <div style={{marginLeft:'40rem',marginTop:"5rem"}}>
                    <h1>
                        Welcome
                    </h1>
                </div>
            </div>
        )
    }
}
