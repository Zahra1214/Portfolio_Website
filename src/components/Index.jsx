import React from 'react';
import Home from './Home';
import Navbar from './Navbar';
import Projects from './project';
import LoginForm from './LoginForm';

const Index = () => {
    return (
        <div>
            <Home />
            <Projects />
            <LoginForm />
        </div>
    );
}

export default Index;
