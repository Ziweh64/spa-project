import React from 'react';
import Navbar from '../components/Navbar';
import './Home.css';



function Home(){
    return (

            <div className="home-content">
                <h1>Welcome to My App!</h1>
                <p>
                    Explore a platform built to provide you with a seamless experience. 
                    Our application helps you manage your profile, stay connected, and access personalized features all in one place.
                </p>
                <p>
                    Ready to get started? Navigate through our menu to discover various features tailored just for you. 
                    Visit the <strong>User Profile</strong> page to view and update your personal information, or check out the <strong>About</strong> page to learn more about our mission and values.
                </p>
                <p>
                    We are continuously working to improve and expand our services, so make sure to check back often for updates and new features. 
                    Thank you for choosing us as your go-to platform!
                </p>
            </div>

    );
}

export default Home;