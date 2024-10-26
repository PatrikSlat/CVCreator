import { useState } from "react";

const EduInfoQ = () => {

  const [inputValueSchool, setInputValueSchool] = useState("");
  const [inputValueStudy, setInputValueStudy] = useState("");
  const [inputValueDos, setInputValueDos] = useState("");

  const passValueSchool = (e) => {
    setInputValueSchool(e.target.value)
    console.log(inputValueSchool)
  }

  const passValueStudy = (e) => {
    setInputValueStudy(e.target.value)
    console.log(inputValueStudy)
  }

  const passValueDos = (e) => {
    setInputValueDos(e.target.value)
    console.log(inputValueDos)
  }

  return <div className="questions">
  <h3>General Info:</h3>
  <hr></hr>
  <label for="name">School name:</label>
  <input className="question" type="text" placeholder="University of California, Berkeley" name="school" value={inputValueSchool} onChange={passValueSchool}></input>
  <label for="tos">Title of Study:</label>
  <input className="question" type="text" placeholder="Bachelor of Science in Computer Science" name="tos" value={inputValueStudy} onChange={passValueStudy}></input>
  <label for="date">Date of Study:</label>
  <input className="question" type="text" placeholder="2003-2006" name="date" value={inputValueDos} onChange={passValueDos}></input>  
  <div id="space-left">
  </div>
  </div>
  }




export default EduInfoQ;