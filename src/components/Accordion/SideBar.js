import React from 'react';
import { slide as Menu } from 'react-burger-menu';
import AccordionList from './AccordionList'
import AccordionPersoList from './AccordionPersoList'
import AccordionHistoricList from './AccordionHistoricList'
import { AuthContext } from '../AuthenticationContext/AuthContext';


function SideBar() {

    if (this.state.auth === true) {
        const authenticated = true;
    }

    return (
        <Menu>

            <AuthContext.Provider value={this.state === true}>
                <AccordionList />
                <AccordionPersoList />
                <AccordionHistoricList />

            </AuthContext.Provider>

            <AuthContext.Provider value={this.state === true}>
                <AccordionList />

            </AuthContext.Provider>

        </Menu>

    );
};

export default SideBar;