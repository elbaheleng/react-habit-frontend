import React from 'react'
import image2 from '../assets/2.png';
import Button from 'react-bootstrap/Button';
import { Link, } from 'react-router-dom';
import Header from './Header';



function Landingpage() {
    return (
        <>
<Header/>
            <div className="w-100"
                style={{ minHeight: '400px', }}
            >
                <div className="container d-flex align-items-center justify-content-center" style={{ height: '600px' }}>

                    <div className="row w-100 align-items-center">

                        <div className="col-lg-6 text-center  mb-4  mb-lg-0">

                            <h1 style={{ color: 'darkviolet' }}>Welcome to HabitQuest</h1>
                            <h5 style={{ color: '#ff1cb3' }}>
                                Build Better Routines. Live Your Best Life.
                            </h5>
                            <div className="mt-4 d-flex gap-4 justify-content-center">
                                <Link to={'/signup'}>
                                    <Button
                                        className=" mb-3"
                                        style={{ backgroundColor: "#60038a", color: "#fff", border: "none" }}

                                    >
                                        Sign Up
                                    </Button>
                                </Link>

                                <Link to={'/Login'}>
                                    <Button
                                        className=" mb-3"
                                        style={{ backgroundColor: "#60038a", color: "#fff", border: "none" }}

                                    >
                                        Login
                                    </Button>
                                </Link>
                            </div>
                        </div>

                        <div className="col-lg-6 text-center">
                            <img src={image2} style={{ maxWidth: '400px', height: 'auto', maxHeight: '420px' }}
                            />
                        </div>
                    </div>
                </div>
            </div>

        </>
    )
}

export default Landingpage