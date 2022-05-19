import React from 'react';
import { slide as Menu } from 'react-burger-menu';
import AccordionList from './AccordionList'
import AccordionPersoList from './AccordionPersoList'
import AccordionHistoricList from './AccordionHistoricList'


export default props => {
    return (
        <Menu>

            <AccordionList />

            <AccordionPersoList />

            <AccordionHistoricList />


            {/* <a className="menu-item" href="/">
                Home
            </a>

            <a className="menu-item" href="/laravel">
                Laravel
            </a>

            <a className="menu-item" href="/angular">
                Angular
            </a>

            <a className="menu-item" href="/react">
                React
            </a>

            <a className="menu-item" href="/vue">
                Vue
            </a>

            <a className="menu-item" href="/node">
                Node
            </a> */}
        </Menu>
    );
};