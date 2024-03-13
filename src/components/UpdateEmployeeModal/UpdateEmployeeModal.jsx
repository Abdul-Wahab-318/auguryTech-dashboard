import React , { useEffect , useState  }  from 'react'
import CustomButton from '../CustomButton/CustomButton.jsx'
import CustomModal from '../CustomModal/CustomModal.jsx'
import {updateEmployee} from "../../api/api.js"

export default function UpdateEmployeeModal({ open , setOpen , employee , setRows }) {

    //let { name , title , subtitle , linkedin , imgLink } = employee
    
    const [ name , setName ] = useState(employee.name)
    const [ title , setTitle ] = useState(employee.title)
    const [ linkedin , setLinkedin ] = useState(employee.linkedin)
    const [ imgLink , setImgLink] = useState(employee.imgLink)
    

    const handleUpdate = async () => {

        const payload = { name , title , linkedin , imgLink }

        try{
          let { data } = await updateEmployee( employee._id , payload )
          
          setRows( state => state.map( row => {
            if ( row._id === employee._id ) return { ...payload , _id : employee._id } 
            else return row
          } ))

          setOpen(false)
        }
        catch(err){
          console.error( err )
        }
      }

  return (
    <CustomModal open={open} setOpen={setOpen} >

        <div className='modal-wrapper'>

        <h3 className="mb-4">Update Employee</h3>
        <label className='mb-2'>Name</label>
        <input type="text" value={name} onChange={ e => setName(e.target.value)} className='w-100 p-2' placeholder='Enter Employee Name' />

        <label className='mb-2 mt-3'>Title</label>
        <input type="text" value={title} onChange={ e => setTitle(e.target.value)}  className='w-100 p-2' placeholder='Enter Employee Title' />

        <label className='mb-2 mt-3'>Linkedin Profile Link</label>
        <input type="text" value={linkedin} onChange={ e => setLinkedin(e.target.value)}  className='w-100 p-2' placeholder='Enter Linkedin Profile ' />

        <label className='mb-2 mt-3'>Enter Profile Pic Link</label>
        <input type="text" value={imgLink} onChange={ e => setImgLink(e.target.value)}  className='w-100 p-2' placeholder='Enter Profile Pic Link' />
        {/* <p className='mt-5 text-danger'>{error}</p> */}
        <CustomButton  onClick={handleUpdate} className="mt-3" >Submit</CustomButton>

        </div>

  </CustomModal>
  )
}
