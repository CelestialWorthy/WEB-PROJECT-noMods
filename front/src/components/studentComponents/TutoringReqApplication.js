import React, { useState } from 'react';
import './MakeAppointment'; 
import SideNavBar from './SideNavBar';

const TutoringReqApplication = () => {
  const [name, setName] = useState('');
  const [subject, setSubject] = useState('');
  const [subjectGrade, setSubjectGrade] = useState('');

 

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle form submission logic here
    console.log('Name:', name);
    console.log('Subject:', subject);
    console.log('Subject Grade:', subjectGrade);
  };

  return (
    <div>
<nav>
<SideNavBar/>
</nav>
    <div className="wrapper">
      <form action="" onSubmit={handleSubmit}>
      <h2>Welcome!<br /><span>Send your request now</span></h2>

      <div className="input-box">
            <label className="sub_title" htmlFor="subjectGrade">
              Name of student
            </label>
            <input
              placeholder="Enter your subject grade"
              className="form_style"
              type="text"
              value={subjectGrade}
              onChange={(e) => setSubjectGrade(e.target.value)}
            />
          <i className='bx bxs-user'></i>
          </div>


          <div className="input-box">
            <label className="sub_title" htmlFor="subjectGrade">
              Subject name
            </label>
            <input
              placeholder="Enter your subject grade"
              className="form_style"
              type="text"
              value={subjectGrade}
              onChange={(e) => setSubjectGrade(e.target.value)}
            />
          <i className='bx bxs-user'></i>
          </div>



          <div className="input-box">
            <label className="sub_title" htmlFor="subjectGrade">
              Subject grade
            </label>
            <input
              placeholder="Enter your subject grade"
              className="form_style"
              type="text"
              value={subjectGrade}
              onChange={(e) => setSubjectGrade(e.target.value)}
            />
          <i className='bx bxs-user'></i>
          </div>


          <div>
            <button className="btn" type="submit">
              APPLY
            </button>
          </div>


        </form>
    </div>
    </div>
  );
};

export default TutoringReqApplication;