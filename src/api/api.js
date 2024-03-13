import axios from "../axiosInstance"

export const getTeam = async () => {
    try{
        let { data } = await axios.get("/employees") 
        console.log(data)
        return data
    }   
    catch(err)
    {
        console.log(err)
    }
}

export const createEmployee = async ( payload ) => {
    try{
        let { data } = await axios.post("/employees" , payload) 
        console.log(data)
        return data
    }   
    catch(err)
    {
        console.log(err)
    }
}

export const updateEmployee = async ( id , payload ) => {
    try{
        let { data } = await axios.put("/employees/" + id , payload) 
        console.log(data)
        return data
    }   
    catch(err)
    {
        console.log(err)
        return err
    }
}

export const getProjects = async () => {
    try{
        let { data } = await axios.get("/projects") 
        console.log(data)
        return data
    }   
    catch(err)
    {
        console.log(err)
    }
}


export const createProject = async ( payload ) => {
    try{
        let { data } = await axios.post("/projects" , payload) 
        console.log(data)
        return data
    }   
    catch(err)
    {
        console.log(err)
    }
}

export const updateProject = async ( id , payload ) => {
    try{
        let { data } = await axios.put("/projects/" + id , payload) 
        console.log(data)
        return data
    }   
    catch(err)
    {
        console.log(err)
        return err
    }
}

