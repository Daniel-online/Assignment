import axios from "axios"
import IMAGE_KEY from "./../../../../.env";
let require("dotenv").config();

const Flag = () => {

    const flagIcon = axios.get(IMAGE_KEY);

  return (
    


    <div>
      
    </div>
  )
}

export default Flag
