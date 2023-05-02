import React from 'react';
import NevSection from './Component/NavSection/NevSection';
import { Outlet } from 'react-router-dom';


const App = () => {
    return (
        <div>
            <NevSection></NevSection>
            <Outlet></Outlet>
        </div>
    );
};

export default App;