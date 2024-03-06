import axios from "../axiosInstance"

export const getTeam = async () => {
    try{
        let { data } = await axios.get("/employees/employees") 
        console.log(data)
        return data
    }   
    catch(err)
    {
        console.log(err)
    }
}