import { React, useState,useEffect } from "react";
import TextField from "@mui/material/TextField";
import "./SearchBar.css"
import List from "./List";
import SideNavBar from "./SideNavBar";

function SearchBar() {

  const [inputText, setInputText] = useState("");
  // const [tutors, setTutors] = useState([]);

  // useEffect(() => {
  //   const fetchTutors = async () => {
  //     const subject = inputText.toLowerCase();
  //     const response = await fetch(`http://localhost:3001/tutors${subject ? `/${subject}` : ''}`);
  //     const data = await response.json();
  //     setTutors(data.tutors);
  //   };

  //   fetchTutors();
  // }, [inputText]);


  let inputHandler = (e) => {
      var lowerCase = e.target.value.toLowerCase();
      setInputText(lowerCase);
  };

  
  return (
    <>
      <SideNavBar/>
      <h1>Search For  Tutor</h1>
      <div className="search">
        <TextField
          id="outlined-basic"
          onChange={inputHandler}
          variant="outlined"
          fullWidth
          label="Search"
        />
      </div>
      <List input={inputText} />
      </>
  );
}

export default SearchBar;
