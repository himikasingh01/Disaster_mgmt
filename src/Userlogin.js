import React, { useState } from 'react';
import { useNavigate,Link } from 'react-router-dom'; // Import useNavigate
import { useAuth } from './context/AuthContext'; // Import useAuth


const UserLogin = () => {
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const navigate = useNavigate(); // Initialize useNavigate
    const { login } = useAuth(); // Get login function from context

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            const response = await fetch('http://localhost:5000/api/login', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({ username, password }),
            });
            const data = await response.json();
            alert(data.message);
            if (data.success) {
                login('user'); // Set role to user
                navigate('/dashboard/user'); // Redirect to user dashboard on success
            }
        } catch (error) {
            console.error('Error:', error);
            alert('An error occurred. Please try again later.');
        }
    };

    return (
        <form onSubmit={handleSubmit}>
            <div>
            <Link to="/" style={{ color: '#fff', textDecoration: 'none' }}>
          <button style={{ padding: '1px', backgroundColor: '#fff', color: '#00796b', border: 'none', borderRadius: '5px' }}>Back to Home</button>
        </Link>
            </div>
            <h2>User Login</h2>

            <div>
            
                <label>Username:</label>
                <input type="text" value={username} onChange={(e) => setUsername(e.target.value)} required />
        <br></br>
            </div>

            <div>
                <br></br>
                <label>Password:</label>
                <input type="password" value={password} onChange={(e) => setPassword(e.target.value)} required />
            <br></br>
            </div>

            <br></br>
            <button type="submit" style={{ padding: '10px', backgroundColor: '#7EC8E3', color: '#fff', border: 'none', borderRadius: '5px' }}>Login</button>

        </form>
    );
};

export default UserLogin;
