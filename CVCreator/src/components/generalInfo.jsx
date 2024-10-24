const GeneralInfoQ = () => {
  return <div className="questions">
    <h3>General Info:</h3>
    <hr></hr>
    <label for="name">Name:</label>
    <input className="question" type="text" placeholder="E.g Joe Doe" name="name"></input>
    <label for="email">E-mail:</label>
    <input className="question" type="text" placeholder="E.g joe.doe@mail.com" name="email"></input>
    <label for="phone">Phone:</label>
    <input className="question" type="text" placeholder="(+49)1592313425" name="phone"></input>
  </div>
}

export default GeneralInfoQ;