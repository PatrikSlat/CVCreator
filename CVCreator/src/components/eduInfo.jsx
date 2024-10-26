const EduInfoQ = () => {
  return <div className="questions">
  <h3>General Info:</h3>
  <hr></hr>
  <label for="name">School name:</label>
  <input className="question" type="text" placeholder="University of California, Berkeley" name="school"></input>
  <label for="tos">Title of Study:</label>
  <input className="question" type="text" placeholder="Bachelor of Science in Computer Science" name="tos"></input>
  <label for="date">Date of Study:</label>
  <input className="question" type="text" placeholder="2003-2006" name="date"></input>  
  <div id="space-left">
  </div>
  </div>
  }




export default EduInfoQ;