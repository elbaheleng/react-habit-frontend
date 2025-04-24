import React, { useState } from 'react';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import { Link, useNavigate } from 'react-router-dom';
import { getUserApi } from '../services/allApi';
import image3 from '../assets/pic.jpeg'; // Optional, if you want a different left image
import Header from './Header';


function Login({ setLoggedInUser }) {
    const [formData, setFormData] = useState({ name: '', password: '' });
    const [errors, setErrors] = useState({});
    const [valid, setValid] = useState(true);
    const navigate = useNavigate();

    const login = async () => {
        let isvalid = true;
        let validationErros = {};

        if (!formData.username.trim()) {
            isvalid = false;
            validationErros.username = "Email is required";
        }
        if (!formData.password) {
            isvalid = false;
            validationErros.password = "Password is required";
        } 

        if (!isvalid) {
            setValid(false);
            setErrors(validationErros);
            return;
        }

        try {
            const response = await getUserApi();
            const users = response.data;
            let matchedUser = users.find(
                user => user.username.toLowerCase().trim() === formData.username.toLowerCase().trim()
            );


            if (matchedUser) {
                if (matchedUser.password === formData.password.trim()) {
                    alert("Login Successfully");
                    navigate('/dashboard');
                    setLoggedInUser(matchedUser);
                } else {
                    setErrors({ password: "Incorrect password" });
                    setValid(false);
                }
            } else {
                setErrors({ username: "User not found" });
                setValid(false);
            }
        } catch (error) {
            console.error("API error:", error);
            alert("Something went wrong. Please check your server.");
        }
    }

    return (
       <>
     <Header/>
            <div className="d-flex ">
                <div className="w-50 d-flex flex-column justify-content-center align-items-center text-white" style={{
        backgroundImage: `url(${image3})`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        padding: '2rem',
        height: '100vh'
      }}>
                    <h1 style={{ fontSize: '3rem', fontWeight: 'bold' }}></h1>
                    
                </div>
    
                <div className="w-50 d-flex justify-content-center align-items-center bg-white">
                    <div style={{ width: '80%', maxWidth: '400px' }}>
                        <h2 className="mb-4 text-center fw-bold">Login</h2>
    
                        <Form.Control
                            type="email"
                            placeholder="User Name"
                            className="mb-3"
                            onChange={(e) => setFormData({ ...formData, username: e.target.value })}
                        />
                        <Form.Control
                            type="password"
                            placeholder="****"
                            className="mb-3"
                            onChange={(e) => setFormData({ ...formData, password: e.target.value })}
                        />
                        {
                            !valid && (
                                <div className="text-danger mb-2">
                                    {errors.username && <p>{errors.username}</p>}
                                    {errors.password && <p>{errors.password}</p>}
                                </div>
                            )
                        }
    
                        <Button
                            className="w-100 mb-3"
                            style={{ backgroundColor: "#60038a", color: "#fff", border: "none" }}
                            onClick={login}
                        >
                            Login
                        </Button>
    
                        <div className="text-center mb-2 text-muted">or</div>
    
                       
    
                        <div className="text-center text-muted">
                            Don’t have an account? <Link to="/signup">Sign up</Link>
                        </div>
                    </div>
                </div>
            </div>
           
       </>
    );
}

export default Login;