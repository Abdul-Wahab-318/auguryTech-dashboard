import React, { useEffect , useState  } from 'react'
import CustomBox from "../../components/CustomBox/CustomBox.jsx"
import PageTitle from "../../components/PageTitle/PageTitle.jsx"
import TeamGrid from '../../components/TeamGrid/TeamGrid.jsx'
import { Stack } from '@mui/material'
import CustomButton from '../../components/CustomButton/CustomButton.jsx'
import CustomModal from '../../components/CustomModal/CustomModal.jsx'
import { createEmployee } from '../../api/api.js'

export default function Team() {

  const [open , setOpen] = useState(false)
  const [error , setError] = useState("")
  const [name , setName] = useState("")
  const [title , setTitle] = useState("")
  const [imageLink , setImageLink] = useState("")
  const [linkedinProfile , setLinkedinProfile] = useState("")

  const validate = () => {
    return name !== "" && title !== ""
  }

  const clear = () => {
    setError("")
    setName("")
    setTitle("")
    setImageLink("")
    setLinkedinProfile("")
  }

  const handleSubmit = async () => {
    
    let validated = validate()

    if ( validated )
    {
      try{
        let data = await createEmployee({ name , title , imgLink : imageLink , linkedin : linkedinProfile })
      }
      catch(err)
      {
        console.error(err)
      }
      finally {
        setOpen(false)
        clear()
      }
    }
    else
    {
      setError("Field Validation Failed")
    }

  }

  return (
    <>
      <Stack direction={'row'} className='mb-4' justifyContent={'space-between'} alignItems={'center'}>
        <PageTitle>Team</PageTitle>
        <CustomButton onClick={()=> setOpen(true)}>Add Team Member</CustomButton>
      </Stack>
      <CustomModal open={open} setOpen={setOpen} >

        <div className='modal-wrapper'>

          <h3 className="mb-4">Create New Employee</h3>
          <label className='mb-2'>Name</label>
          <input type="text" value={name} onChange={ e => setName(e.target.value)} className='w-100 p-2' placeholder='Enter Employee Name' />

          <label className='mb-2 mt-3'>Title</label>
          <input type="text" value={title} onChange={ e => setTitle(e.target.value)} className='w-100 p-2' placeholder='Enter Employee Title' />

          <label className='mb-2 mt-3'>Linkedin Profile Link</label>
          <input type="text" value={linkedinProfile} onChange={ e => setLinkedinProfile(e.target.value)} className='w-100 p-2' placeholder='Enter Linkedin Profile ' />

          <label className='mb-2 mt-3'>Enter Profile Pic Link</label>
          <input type="text" value={imageLink} onChange={ e => setImageLink(e.target.value)} className='w-100 p-2' placeholder='Enter Profile Pic Link' />
          <p className='mt-5 text-danger'>{error}</p>
          <CustomButton  onClick={handleSubmit}>Submit</CustomButton>

        </div>

      </CustomModal>
      <CustomBox>
        <TeamGrid/>
      </CustomBox>
    </>
  )
}

