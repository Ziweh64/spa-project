// src/pages/UserProfile.js
import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import './UserProfile.css';

function UserProfile() {
    const { username } = useParams();
    const [profile, setProfile] = useState(null);
    const [error, setError] = useState(null);

    useEffect(() => {
        const fetchProfile = async () => {
            try {
                const response = await fetch('/db.json');
                if (!response.ok) {
                    throw new Error('Failed to fetch user data.');
                }
                const data = await response.json();

                // Find the user with the matching username
                const userProfile = data.find(user => user.username === username);
                if (!userProfile) {
                    throw new Error('User not found.');
                }

                setProfile(userProfile);
            } catch (error) {
                setError(error.message);
            }
        };
        fetchProfile();
    }, [username]);

    if (error) {
        return <div className="user-profile"><p>Error: {error}</p></div>;
    }

    return (
        <div className="user-profile">
            <h1>User Profile: {profile ? profile.name : 'Loading...'}</h1>
            {profile ? (
                <div>
                    <p><strong>Bio:</strong> {profile.bio}</p>
                    <p><strong>Location:</strong> {profile.location}</p>
                    <p><strong>Occupation:</strong> {profile.occupation}</p>
                    <p><strong>Interests:</strong> {profile.interests.join(', ')}</p>
                </div>
            ) : (
                <p>Loading profile details...</p>
            )}

            <button class="edit-btn">Edit information</button>

        </div>

    );
}

export default UserProfile;
