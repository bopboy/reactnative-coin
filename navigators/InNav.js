import { createNativeStackNavigator } from "@react-navigation/native-stack"
import React from 'react'
import Detail from "../screens/Detail"
import Home from "../screens/Home"

const Nav = createNativeStackNavigator()

const InNav = () => {
    return (
        <Nav.Navigator>
            <Nav.Screen name="Home" component={Home} />
            <Nav.Screen name="Detail" component={Detail} />
        </Nav.Navigator>
    )
}
export default InNav