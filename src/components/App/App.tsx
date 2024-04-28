import React from 'react';

import AppRoutes from "./AppRoutes";

import '../../styles/index.scss'
import TabMenu from "../Tabs/TabMenu";

const App = () => (
    <div className={`app container`}>
        <TabMenu/>
        <AppRoutes/>
    </div>
);

export default App;