import { commonApi } from "./commonApi"
import { serverurl} from "./serverurl"


// register api
export const registerUserApi = async (reqBody) => {
    return await commonApi("POST", `${serverurl}/user`, reqBody);
  };

//   get user
export const getUserApi = async () => {
    return await commonApi("GET", `${serverurl}/user`);
  };

// add habit api
export const addHabitApi = async(id,reqBody) =>{
    console.log(reqBody);
    
    return await commonApi('PUT',`${serverurl}/user/${id}`,reqBody)
    }
