import Login from './components/home/Login';
import Home from './components/home/Home'
import Register from './components/home/Register'
import TutorDash from './components/tutorComponents/TutorDash';
import Requests from './components/tutorComponents/Requests'
// import  Search  from './components/SearchBar/SearchBar';
import About from './components/home/About';
import {  Route, Routes,BrowserRouter } from "react-router-dom";
import {TutorData,RequestData} from './Data';
import AddContent from './components/tutorComponents/AddContent'
import Appointments from './components/tutorComponents/Appointments'
import './App.css'
import { useState } from 'react';
import StudentDash from './components/studentComponents/StudentDash';
import Notifications from './components/studentComponents/Notifications';
import LookForTutor from './components/studentComponents/LookForTutor'; 
import MakeAppointment from './components/studentComponents/MakeAppointment';
import RateTutor from './components/studentComponents/RateTutor';
import TutoringReqApplication from './components/studentComponents/TutoringReqApplication'

function App() {
  const [Tutors,setStudent]=useState(TutorData);
  const [studentId, setStudentId] = useState(null);

  return (
    <div className="App">
    
   <BrowserRouter>
    <Routes>
    <Route path="/" element={<Home />} />
    <Route path="/Home" element={<Home />} />
    <Route path="/Login" element={<Login />} />
    <Route path= "/Register" element ={<Register/>}/>
    {/* <Route path= "/Search" element ={<Search/>}/> */}
    <Route path= "/About" element ={<About/>}/>
    <Route index element={<StudentDash/>} />
      <Route path="/studentdash" element={<StudentDash/>} />
      <Route path="/notifications" element={<Notifications/>} />
      <Route path="/ratetutor" element={<RateTutor/>} />
      <Route path="/tutoringreqapplication" element={<TutoringReqApplication/>} />
      <Route path="/makeappointment" element={<MakeAppointment/>} />
      <Route path="/switchtotutor" element={<TutorDash/>} />
      <Route path="/lookfortutor" element={<LookForTutor/>} />

    <Route path="/TutorDash" element={<TutorDash tutors={Tutors} />}/>
    <Route path="/Requests" element={<Requests tutors={Tutors}/>}/>
    <Route path="/Appointments" element={<Appointments tutors={Tutors}/>}/>
    <Route path="/AddContent" element={<AddContent tutors={Tutors}/>}/>

    
    </Routes>
    </BrowserRouter>
    </div>
  );
}

export default App;
