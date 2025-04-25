
import React, { useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Link } from 'react-router-dom';
import { faLeaf } from "@fortawesome/free-solid-svg-icons/faLeaf";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';




function Header() {
   

  

    return (
        <>

            <nav>
                <div className="row d-flex justify-content-between pt-2 pb-2 align-items-center w-100" style={{ background: 'rgb(118, 0, 164)', width: '100%', margin: '0' }}>
                    <div className="col-6 col-md-3 text-start ps-4">
                    <Link to={'/'} style={{textDecoration:'none'}}>
                        <h2 className=" fw-bold mb-2 title mt-2">
                                          <FontAwesomeIcon icon={faLeaf} className="me-1 " />
                                          Habit<span className="text-light">Quest</span>
                                        </h2>
                    </Link>
                    </div>


                    


                    <div className="col-md-6 d-none d-md-flex justify-content-around">
                       
                    </div>

                    
                </div>
            </nav>

            

        </>
    )
}

export default Header