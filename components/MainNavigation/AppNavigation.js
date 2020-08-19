import React from 'react'
import Navigator from 'react-native-easy-router'

import Welcome from "../Welcome/Welcome";
import Registration from "../Registration";
import SuccessPage from "../SuccessPage";
import Information from "../Information";

import Footer from '../Footer'
import Header from "../Header";

const AppNavigation = () => {
    const routes = { Welcome, Registration, SuccessPage, Information };
    return (
        <>
            <Navigator screens={ routes } initialStack="Welcome" />
            <Footer/>
        </>
    )
};

export default AppNavigation