import React from 'react'
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFacebook, faInstagram, faTelegram, faXTwitter } from '@fortawesome/free-brands-svg-icons';
import { Link } from 'react-router-dom';


function Footer() {
    return (

        <>
            <footer>
                <div
                    className='row d-flex justify-content-evenly pb-3' style={{ background: 'rgb(118, 0, 164)', width: '100%', margin: '0' }}
                >
                   

                    <div className="col-md-3 text-center mt-4">
                        <h5 className='text-white fs-6'>© 2025 HabitQuest. All rights reserved.</h5>
                        
                    </div>
                </div>
            </footer>

        </>
    )
}

export default Footer