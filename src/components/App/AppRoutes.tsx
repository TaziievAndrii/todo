import React from 'react';
import {Route, Routes} from "react-router-dom";

import AllTasks from "../Tasks/AllTasks";
import DeletedTasks from "../Tasks/DeletedTasks";
import TabMenu from "../Tabs/TabMenu";

const AppRoutes = () => (
    <Routes>
        <Route index element={<TabMenu />} />
        <Route path={`/all`} element={<AllTasks />} />
        <Route path={`/deleted`} element={<DeletedTasks />} />
    </Routes>
)

export default AppRoutes;