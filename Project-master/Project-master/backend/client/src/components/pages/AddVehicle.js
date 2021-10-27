import React, { Component } from 'react'


import VehicleKard from './../fragments/VehicleKard'

//Navbar
import HomeNavBar from './../navigation/homeNavBar'

export default class AddVehicle extends Component {
    render() {
        return (
            <div>
                <HomeNavBar/>
                <VehicleKard/>
            </div>
        )
    }
}
