import React from 'react'
import {
    Header, Footer, LoadingComponent
} from '../../components';
import { Outlet } from 'react-router-dom';

const StoreLayout = ({ children }) => {
    return (
        <div>
            <Header />
            <main>
                <LoadingComponent>
                    {/* Contenido del HomePage */}
                    <Outlet/> {children}
                </LoadingComponent>
            </main>
            <Footer />
        </div>
    )
}

export default StoreLayout