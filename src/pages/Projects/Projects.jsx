import React, { useEffect , useState  } from 'react'
import CustomBox from "../../components/CustomBox/CustomBox.jsx"
import PageTitle from "../../components/PageTitle/PageTitle.jsx"
import ProjectGrid from '../../components/ProjectGrid/ProjectGrid.jsx'
import { Stack } from '@mui/material'
import CustomButton from '../../components/CustomButton/CustomButton.jsx'
import CustomModal from '../../components/CustomModal/CustomModal.jsx'
import { createEmployee, createProject } from '../../api/api.js'

export default function Projects() {

  const [open , setOpen] = useState(false)
  const [error , setError] = useState("")
  const [title , setTitle] = useState("")
  const [subtitle , setSubtitle] = useState("")
  const [desktopImg , setDesktopImg] = useState("")
  const [mobileImg , setMobileImg] = useState("")
  const [newProject , setNewProject] = useState(false)

  const validate = () => {
    return title !== "" && subtitle !== ""
  }

  const clear = () => {
    setError("")
    setSubtitle("")
    setTitle("")
    setMobileImg("")
    setDesktopImg("")
  }

  const handleSubmit = async () => {
    
    let validated = validate()

    if ( validated )
    {
      try{
        let data = await createProject({subtitle , title , mobileImg , desktopImg , newProject})
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
        <CustomButton onClick={()=> setOpen(true)}>Add Project</CustomButton>
      </Stack>
      <CustomModal open={open} setOpen={setOpen} >

        <div className='modal-wrapper'>

          <h3 className="mb-4">Create New Project</h3>
          <label className='mb-2'>Title</label>
          <input type="text" value={title} onChange={ e => setTitle(e.target.value)} className='w-100 p-2' placeholder='Enter Project title' />

          <label className='mb-2 mt-3'>Sub Title</label>
          <input type="text" value={subtitle} onChange={ e => setSubtitle(e.target.value)} className='w-100 p-2' placeholder='Enter Project Sub Title' />

          <label className='mb-2 mt-3'>Mobile View Image</label>
          <input type="text" value={mobileImg} onChange={ e => setMobileImg(e.target.value)} className='w-100 p-2' placeholder='Enter Mobile View image Link ' />

          <label className='mb-2 mt-3'>Desktop View Image </label>
          <input type="text" value={desktopImg} onChange={ e => setDesktopImg(e.target.value)} className='w-100 p-2' placeholder='Enter Profile Pic Link' />
          <p className='mt-5 text-danger'>{error}</p>
          <CustomButton  onClick={handleSubmit}>Submit</CustomButton>

        </div>

      </CustomModal>
      <CustomBox>
        <ProjectGrid/>
      </CustomBox>
    </>
  )
}

