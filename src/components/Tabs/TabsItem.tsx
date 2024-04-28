import React from 'react';

import {Link, useLocation} from "react-router-dom";

const TabsItem = ({ path, title }: { path: string, title: string }) => {
    const location = useLocation();

    return (
        <li className={location.pathname.includes(path) ? 'active' : ''}>
            <Link to={`/${path}`}>{title}</Link>
        </li>
    );
};

export default TabsItem;