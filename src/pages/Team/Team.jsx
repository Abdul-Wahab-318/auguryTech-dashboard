import React, { useEffect , useState  } from 'react'
import CustomBox from "../../components/CustomBox/CustomBox.jsx"
import PageTitle from "../../components/PageTitle/PageTitle.jsx"
import TeamGrid from '../../components/TeamGrid/TeamGrid.jsx'
import { Stack } from '@mui/material'
import CustomButton from '../../components/CustomButton/CustomButton.jsx'
import CustomModal from '../../components/CustomModal/CustomModal.jsx'

export default function Team() {

  const [open , setOpen] = useState(false)

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
          <input type="text" className='w-100 p-2' placeholder='Enter Employee Name' />

          <label className='mb-2 mt-3'>Title</label>
          <input type="text" className='w-100 p-2' placeholder='Enter Employee Title' />

          <label className='mb-2 mt-3'>Linkedin Profile Link</label>
          <input type="text" className='w-100 p-2' placeholder='Enter Linkedin Profile ' />

          <label className='mb-2 mt-3'>Enter Profile Pic Link</label>
          <input type="text" className='w-100 p-2' placeholder='Enter Profile Pic Link' />
          
          <CustomButton className="mt-4">Submit</CustomButton>

        </div>

      </CustomModal>
      <CustomBox>
        <TeamGrid/>
      </CustomBox>
    </>
  )
}
