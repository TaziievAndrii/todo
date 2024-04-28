import React from 'react';

import { tabItems } from '../../utils/constants';

import TabsItem from "./TabsItem";

const TabMenu = () => {
    return (
        <main className="main">
           <ul className={`menu`}>
               {tabItems.map((tab, index) => (
                  <TabsItem key={tab.path} {...tab}/>
               ))}
           </ul>
        </main>
    );
};

export default TabMenu;