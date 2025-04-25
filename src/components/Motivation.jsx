import React from 'react'
import Header from './Header'
import image1 from "../../public/images/pomodoro.png"

function Motivation() {
  return (
    <>
    <Header/>
        <div className="container feature-section">
    <h1 className='text-center mt-5'>Techniques to Maintain your Good Habits</h1>
            {/*pomodoro technique*/}
    
            <div id='purp' className="row d-flex align-items-center justify-content-center">
              {/* Text Content */}
              <div className="col-lg-6 feature-text">
                <h2 className="mb-3 mt-5" style={{color:"darkviolet"}}>Pomodoro Technique</h2>
                <p className="text-muted">
                  - Pick a task you want to work on.
                </p>
                <p className="text-muted">- Set a timer for 25 minutes – this is one "Pomodoro".</p>
                <p className="text-muted">- Work on the task without any distractions until the timer rings.</p>
                <p className="text-muted">- Take a short break (5 minutes).</p>
                <p className="text-muted">- After every 4 Pomodoros, take a longer break (15–30 minutes).</p>
              </div>
    
              {/* Image */}
              <div className="col-lg-6 text-center align-items-center feature-image">
                <img
                  src= {image1} 
                  alt="No image"
                  className="img-fluid"
                  style={{width:'300px'}}
                />
              </div>
            </div>
    
            
            {/*2 MINUTE RULE*/}
      
    
            <div className="row align-items-center justify-content-center my-5">
              {/* Image */}
              <div className="col-lg-6 text-center feature-image">
                <img
                  src="/images/two_min.png"
                  alt="No image"
                  className="img-fluid"
                  style={{width:'350px'}}
                />
              </div>
    
              {/* Text Content */}
               <div className="col-lg-6 feature-text">
                <h2 className="mb-3 mt-5" style={{color:"darkviolet"}}>2-minute rule</h2>
                <p>The 2-Minute Rule is a productivity and time management principle popularized by David Allen in his book Getting Things Done. It's super simple but really effective. Here’s the gist:</p>
                <p className="text-muted">
                  - If a task will take less than two minutes to complete, do it immediately.
                </p>
                <h3>Example</h3>
                <p className="text-muted">- Replying to a short E-mail</p>
                <p className="text-muted">- Putting your shoes back in the rack</p>
                <p className="text-muted">- Creating a quick reminder or calendar event</p>
              </div>
            </div>
    
    
            {/*Flowtime technique */}
    
            <div id='purp' className="d-flex row align-items-center justify-content-center">
              {/* Text Content */}
              <div className="col-lg-6 feature-text">
                <h2 className="mb-3 mt-5" style={{color:"darkviolet"}}>Flowtime Technique</h2>
                <p className="text-muted">
                A flexible time‑management method that replaces fixed‑length Pomodoro sprints with
                 focus sessions that end only when your concentration naturally dips.
                </p>
                <p className="text-muted">- Pick a single task. Note the start time.</p>
                <p className="text-muted">- Work until you feel mental fatigue .</p>
                <p className="text-muted">- Log the stop time & minutes worked in a simple table.</p>
                <p className="text-muted">- Take a break proportional to effort.</p>
                <p className='text-muted'>- Repeat, recording each cycle and spot your peak‑productivity windows.</p>
              </div>
    
              {/* Image */}
              <div className="col-lg-6 text-center feature-image mt-5">
                <img
                  src="/images/flowtime.png"
                  alt="No image"
                  className="img-fluid"
                  style={{width:'350px'}}
                />
              </div>
            </div>
    
          {/*Eisenhower matrix*/ }
    
            <div className="row align-items-center justify-content-center my-5">
              {/* Image */}
              <div className="col-lg-6 text-center feature-image">
                <img
                  src="https://mutomorro.com/wp-content/uploads/2023/11/Eisenhower-Matrix.png"
                  alt="No image"
                  className="img-fluid"
                  style={{width:'350px'}}
                />
              </div>
    
                      {/* Text Content */}
               <div className="col-lg-6 feature-text">
                <h2 className="mb-3 mt-5" style={{color:"darkviolet"}}>The Eisenhower Matrix</h2>
                <p>A simple, four‑quadrant framework for deciding what deserves your time.</p>
                <p className="text-muted">
                  - List every task you’re considering.
                </p>
                <p className="text-muted">- Judge urgency separately from importance.</p>
                <p className="text-muted">- Plot each item into the appropriate quadrant.</p>
                <p className="text-muted">- Act accordingly: do, schedule, delegate, or delete.</p>
                <p className="text-muted">- Review regularly as priorities shift.</p>
              </div>
            </div>
    
    
          {/*80-20 Rule */}
    
          <div id='purp' className="d-flex row align-items-center justify-content-center">
              {/* Text Content */}
              <div className="col-lg-6 feature-text">
                <h2 className="mb-3 mt-5" style={{color:"darkviolet"}}>80/20 Rule</h2>
                <p>
                About 20% of your efforts produce 80 % of your meaningful results.
                </p>
                <p className="text-muted">- Pinpoint your vital tasks that drive real progress toward your goals.</p>
                <p className="text-muted">- Schedule them first in your peak‑energy hours and protect that time from interruptions.</p>
                <p className="text-muted">- Log the stop time & minutes worked in a simple table.</p>
                <p className="text-muted">- Batch, automate, delegate, or drop the routine.</p>
              </div>
    
              {/* Image */}
              <div className="col-lg-6 text-center feature-image mt-5">
                <img
                  src="https://media.licdn.com/dms/image/v2/D5612AQFp_KQjeNpQ6Q/article-cover_image-shrink_720_1280/article-cover_image-shrink_720_1280/0/1728289884516?e=2147483647&v=beta&t=gZYHJMzEzSQPO25U29eX1xKqp8oikVYGjaqqgj2YR6E"
                  alt="No image"
                  className="img-fluid"
                 
                />
              </div>
            </div>
    
            
        </div>
    </>

  )
}

export default Motivation