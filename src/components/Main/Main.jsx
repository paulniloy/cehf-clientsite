import React from 'react';
import { Outlet } from 'react-router-dom';
import Navbar from '../../Nav/Navbar';
import Footer from '../../Footer/Footer';

const Main = () => {
    return (
        <div>
            <section>
                <header>
                    <Navbar></Navbar>
                </header>
            </section>
            <section>
                <Outlet></Outlet>
            </section>
            <section>
                <footer>
                    <Footer></Footer>
                </footer>
            </section>
        </div>
    );
};

export default Main;