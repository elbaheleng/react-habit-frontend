import { faNutritionix } from '@fortawesome/free-brands-svg-icons/faNutritionix';
import { faBed } from '@fortawesome/free-solid-svg-icons/faBed';
import { faBottleWater } from '@fortawesome/free-solid-svg-icons/faBottleWater';
import { faDumbbell } from '@fortawesome/free-solid-svg-icons/faDumbbell';
import { faLeaf } from '@fortawesome/free-solid-svg-icons/faLeaf';
import { faPen } from '@fortawesome/free-solid-svg-icons/faPen';
import { faPlus } from '@fortawesome/free-solid-svg-icons/faPlus'
import { faTrashCan } from '@fortawesome/free-solid-svg-icons/faTrashCan';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import React from 'react'
import { Container, Row, Col, Button, Card, Table, ProgressBar } from "react-bootstrap";
import AddHabit from './AddHabit';






function Dashboard() {
    const darkPurple = 'rgb(87, 16, 87)';
  return (
    <>


<Container fluid className="p-0">
      {/* Top Header */}
      <div className="text-white text-start p-2 px-4" style={{ backgroundColor: darkPurple }}>
        <h2> <FontAwesomeIcon icon={faLeaf} className='me-2' />HabitQuest</h2>
      </div>

      <Row className="m-0" style={{ minHeight: '100vh' }}>
        {/* Sidebar */}
        <Col md={2} className="bg-white border-end d-flex flex-column align-items-center p-4">
          {['Motivation', 'Leaderboard', 'FAQs', 'Developers','Logout'].map((label, index) => (
            <Button key={index} variant="" className="mb-3 px-4 py-2 text-white rounded-pill w-100" style={{ backgroundColor: darkPurple }}>
              {label}
            </Button>
          ))}
        </Col>

        {/* Center Section */}
        <Col md={8} className="p-4">
         <div className='mot-bg rounded p-4 text-light'>
              <h5>3:30PM</h5>
              <p className="text-break">
              Success is the sum of small efforts, repeated day in and day out.
              </p>
              <p><strong>Note:</strong> Only Good Habits</p>
    
         </div>

         <div className="d-flex justify-content-between align-items-center w-100 mt-4">
            <h3 className="mt-4 fw-bold">Habits</h3>
            <AddHabit/>
          </div>


          
          <div className="table-responsive">
            <Table bordered className="text-center mt-4 overflow-auto">
              <thead className=''>
                <tr className=''>
                  <th className='text-light'  style={{ backgroundColor: darkPurple }}>Sl. No.</th>
                  <th className='text-light'  style={{ backgroundColor: darkPurple }}>Habit</th>
                  <th className='text-light'  style={{ backgroundColor: darkPurple }}>Categories</th>
                  <th className='text-light'  style={{ backgroundColor: darkPurple }}>Frequency</th>
                  <th className='text-light'  style={{ backgroundColor: darkPurple }}>Action</th>
                </tr>
              </thead>
              <tbody>
                <tr className='fw-bold'>
                  <td  style={{backgroundColor:'rgb(229, 230, 252)'}}>1</td>
                  <td style={{backgroundColor:'rgb(229, 230, 252)'}} >Workout</td>
                  <td style={{backgroundColor:'rgb(229, 230, 252)'}}><FontAwesomeIcon icon={faDumbbell} style={{color: "#f07400",}} className='fs-3'/></td>
                  <td style={{backgroundColor:'rgb(229, 230, 252)'}} >Daily</td>
                  <td style={{backgroundColor:'rgb(229, 230, 252)'}} >
                      <button className='py-2 px-3 bg-warning rounded border-0 hover-warning me-4'>
                      <FontAwesomeIcon icon={faPen} />
                      </button>
  
                      <button className='py-2 px-3 bg-danger rounded border-0 hover-danger'>
                      <FontAwesomeIcon icon={faTrashCan} />
                      </button>
                  </td>
                </tr>
  
                <tr className='fw-bold'>
                  <td  style={{backgroundColor:'rgb(229, 230, 252)'}}>2</td>
                  <td style={{backgroundColor:'rgb(229, 230, 252)'}} >Protien Intake</td>
                  <td style={{backgroundColor:'rgb(229, 230, 252)'}}><FontAwesomeIcon icon={faNutritionix} style={{color: "#f07400",}} className='fs-3'/></td>
                  <td style={{backgroundColor:'rgb(229, 230, 252)'}} >Weekly</td>
                  <td style={{backgroundColor:'rgb(229, 230, 252)'}} className='d-flex justify-content-center'>
                      <button className='py-2 px-3 bg-warning rounded border-0 hover-warning me-4'>
                      <FontAwesomeIcon icon={faPen} />
                      </button>
  
                      <button className='py-2 px-3 bg-danger rounded border-0 hover-danger'>
                      <FontAwesomeIcon icon={faTrashCan} />
                      </button>
                  </td>
                </tr>
  
                <tr className='fw-bold'>
                  <td  style={{backgroundColor:'rgb(229, 230, 252)'}}>3</td>
                  <td style={{backgroundColor:'rgb(229, 230, 252)'}} >Sleep</td>
                  <td style={{backgroundColor:'rgb(229, 230, 252)'}}><FontAwesomeIcon icon={faBed} style={{color: "#f07400",}} className='fs-3'/></td>
                  <td style={{backgroundColor:'rgb(229, 230, 252)'}} >Daily</td>
                  <td style={{backgroundColor:'rgb(229, 230, 252)'}} >
                      <button className='py-2 px-3 bg-warning rounded border-0 hover-warning me-4'>
                      <FontAwesomeIcon icon={faPen} />
                      </button>
  
                      <button className='py-2 px-3 bg-danger rounded border-0 hover-danger'>
                      <FontAwesomeIcon icon={faTrashCan} />
                      </button>
                  </td>
                </tr>
  
                <tr className='fw-bold'>
                  <td  style={{backgroundColor:'rgb(229, 230, 252)'}}>4</td>
                  <td style={{backgroundColor:'rgb(229, 230, 252)'}} >Drink Water</td>
                  <td style={{backgroundColor:'rgb(229, 230, 252)'}}><FontAwesomeIcon icon={faBottleWater} style={{color: "#f07400",}} className='fs-3'/></td>
                  <td style={{backgroundColor:'rgb(229, 230, 252)'}} >Daily</td>
                  <td style={{backgroundColor:'rgb(229, 230, 252)'}} >
                      <button className='py-2 px-3 bg-warning rounded border-0 hover-warning me-4'>
                      <FontAwesomeIcon icon={faPen} />
                      </button>
  
                      <button className='py-2 px-3 bg-danger rounded border-0 hover-danger'>
                      <FontAwesomeIcon icon={faTrashCan} />
                      </button>
                  </td>
                </tr>
              </tbody>
            </Table>
          </div>
        </Col>

        {/* Right Sidebar */}
        <Col md={2} className="p-4 border-start text-center">
          <h4><strong>Name</strong></h4>
          <div className="d-flex justify-content-center w-100">
            <Card className="mb-3 rounded-circle overflow-hidden" style={{ width: '100px', height: '100px' }}>
              <Card.Img 
                variant="top" 
                src="https://png.pngtree.com/png-clipart/20240614/original/pngtree-cute-young-boy-cartoon-character-png-image_15328125.png"  
                className="" 
                style={{ objectFit: 'cover', width: '100%', height: '100%', borderRadius: '50%' }} 
              />
            </Card>
          </div>
          <div className="text-center">
            <p><strong>Level 2</strong></p>
            <ProgressBar now={60} style={{ backgroundColor: '#f1caff' }} variant="custom-purple" />
          </div>
        </Col>
      </Row>
    </Container>

   
    </>
  )
}

export default Dashboard