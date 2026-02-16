import React from "react";
import Greeting from "./hw/components/Greeting";
import Messange from "./hw/components/Messange";
import Button from "./hw/components/Button";

function App() {
  const handleClick=()=>{
    console.log("you clicked the button");
  };
  return (
   <>
   <Greeting name="Ivan"/>
   <Messange text="These are my greetings)))"/>
   <Button onClick={handleClick}/>
   </>
  );
}

export default App;
