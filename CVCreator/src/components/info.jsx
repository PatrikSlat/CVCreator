import EduInfoQ from "./eduInfo";
import GeneralInfoQ from "./generalInfo";
import PracticalInfoQ from "./practicalInfo";


const Info = () => {
  return <>
    <h1> Type in your information: </h1>
    <hr></hr>
    <GeneralInfoQ />
    <EduInfoQ />
    <PracticalInfoQ />
  </>
} 

export default Info;