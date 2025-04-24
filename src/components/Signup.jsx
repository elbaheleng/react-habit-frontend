import React, { useState } from 'react';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import { Link, useNavigate } from 'react-router-dom';
import { postUserApi } from '../services/allApi';
import image3 from '../assets/pic.jpeg';
import Header from './Header';




function Signup({ setLoggedInUser }) {
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        password: '',
        username: '',
        xp: 0,
        gender: ''
    });

    const [errors, setErrors] = useState({});
    const [valid, setValid] = useState(true);
    const navigate = useNavigate();

    const signupuser = async () => {
        let isvalid = true;
        let validationErrors = {};

        if (!formData.name.trim()) {
            isvalid = false;
            validationErrors.name = "Name is required";
        }
        if (!formData.gender.trim()) {
            isvalid = false;
            validationErrors.gender = "Gender is required";
        }
        if (!formData.username.trim()) {
            isvalid = false;
            validationErrors.username = "User name is required";
        }

        if (!formData.email.trim()) {
            isvalid = false;
            validationErrors.email = "Email is required";
        } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
            isvalid = false;
            validationErrors.email = "Invalid email format";
        }

        if (!formData.password.trim()) {
            isvalid = false;
            validationErrors.password = "Password is required";
        } else if (formData.password.length < 6) {
            isvalid = false;
            validationErrors.password = "Password must be at least 6 characters";
        }

        setErrors(validationErrors);
        setValid(isvalid);

        if (Object.keys(validationErrors).length === 0) {
            await postUserApi(formData);
            alert("Registered Successfully");
            setLoggedInUser(formData);
            navigate('/dashboard');
        }
    };

    return (
      <>
      <Header/>
            <div className="d-flex vh-100">
                {/* Left Panel */}
                <div className="w-50 d-flex flex-column justify-content-center align-items-center text-white"  style={{
    backgroundImage: `url(${image3})`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        padding: '2rem',
        height: '100vh'
      }}>
                    <h1 style={{ fontSize: '3rem', fontWeight: 'bold' }}></h1>
                </div>
    
                {/* Right Panel */}
                <div className="w-50 d-flex justify-content-center align-items-center bg-white">
                    <div style={{ width: '80%', maxWidth: '400px' }}>
                        <h2 className="mb-2 mb-md-4 text-center fw-bold">Sign up</h2>
    
                        <Form.Control
                            placeholder="Enter Full Name"
                            className="mb-1 mb-md-3"
                            onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                        />
                        <div key={`inline-radio`} className="mb-1 mb-md-3">
          <Form.Check
            inline
            label="Male"
            value="male"
            name="group1"
            type="radio"
            id={`inline-radio-Male`}
            onChange={(e) => setFormData({ ...formData, gender: e.target.value })}
            
          />
          <Form.Check
            inline
            label="Female"
            name="group1"
            value="female"
            type="radio"
            id={`inline-radio-Female`}
            onChange={(e) => setFormData({ ...formData, gender: e.target.value })}
          />
          
        </div>
                        <Form.Control
                            placeholder="Set a username"
                            className="mb-1 mb-md-3"
                            onChange={(e) => setFormData({ ...formData, username: e.target.value })}
                        />
                        <Form.Control
                            type="email"
                            placeholder="Email"
                            className="mb-1 mb-md-3"
                            onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                        />
                        <Form.Control
                            type="password"
                            placeholder="Set a Password"
                            className="mb-1 mb-md-3"
                            onChange={(e) => setFormData({ ...formData, password: e.target.value })}
                        />
    
                        {!valid && (
                            <div className="text-danger mb-2">
                                {errors.name && <p>{errors.name}</p>}
                                {errors.email && <p>{errors.email}</p>}
                                {errors.password && <p>{errors.password}</p>}
                            </div>
                        )}
    
                        <Button
                            className="w-100 mb-1 mb-md-3"
                            style={{ backgroundColor: "#60038a", color: "#fff", border: "none" }}
                            onClick={signupuser}
                        >
                            Sign up
                        </Button>
    
                        <div className="text-center text-muted">
                            Already have an account? <Link to="/login">Login</Link>
                        </div>
                    </div>
                </div>
            </div>
      </>
    );
}

export default Signup;