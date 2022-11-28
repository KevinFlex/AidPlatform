import React from 'react';
import AccordionList from './AccordionList'
import AccordionPersoList from './AccordionPersoList'
import AccordionHistoricList from './AccordionHistoricList'
import { AuthContext } from '../AuthenticationContext/AuthContext';
import { slide as Menu } from 'react-burger-menu';

function SideBar() {

    return (
        <Menu>

            <div className='mb-5 primary'>
                <AccordionPersoList />
            </div>
            {/* <div className='mb-3 secondary'>
                            <AccordionHistoricList />
                        </div> */}

        </Menu>
    );
};

export default SideBar;