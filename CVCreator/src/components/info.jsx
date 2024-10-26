import EduInfoQ from "./eduInfo";
import GeneralInfoQ from "./generalInfo";
import PracticalInfoQ from "./practicalInfo";
import { GrAdd } from "react-icons/gr";
import { GrCheckmark } from "react-icons/gr";
import { GrFormTrash } from "react-icons/gr";
import { useState } from "react";

const Info = () => {
  const [eduComponents, setEduComponent] = useState([<EduInfoQ key={0} />]);

  const addEduInfo = () => {
    setEduComponent([...eduComponents, <EduInfoQ key={eduComponents.length} />]);
  };

  const removeEduInfo = () => {
    setEduComponent([...eduComponents.slice(0,-1)])
  }

  const addInfoToDisplay = () => {
    console.log(eduComponents)
  }

  return (
    <>
      <h1> Type in your information: </h1>
      <hr />
      <GeneralInfoQ />
      <div className="buttons-div">
        {eduComponents}
        <div className="buttons">
          <GrFormTrash size={25} onClick={removeEduInfo}/>
          <GrAdd size={25} onClick={addEduInfo} />
          <GrCheckmark size={25} onClick={() => {
            addInfoToDisplay()
          }}/>
        </div>
      </div>
      <PracticalInfoQ />
    </>
  );
};

export default Info;
