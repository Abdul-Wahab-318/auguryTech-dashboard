import React , { useEffect , useState  }  from 'react'
import CustomButton from '../CustomButton/CustomButton.jsx'
import CustomModal from '../CustomModal/CustomModal.jsx'
import {updateProject} from "../../api/api.js"

export default function UpdateProjectModal({ open , setOpen , project , setRows }) {

    //let { name , title , subtitle , linkedin , imgLink } = project
    const [title , setTitle] = useState(project.title)
    const [subtitle , setSubtitle] = useState(project.subtitle)
    const [desktopImg , setDesktopImg] = useState(project.desktopImg)
    const [mobileImg , setMobileImg] = useState(project.mobileImg)
    const [newProject , setNewProject] = useState(project.newProject)
    

    const handleUpdate = async () => {

        const payload = {subtitle , title , mobileImg , desktopImg , newProject}

        try{
          let { data } = await updateProject( project._id , payload )
          
          setRows( state => state.map( row => {
            if ( row._id === project._id ) return { ...payload , _id : project._id } 
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

        <h3 className="mb-4">Update Project</h3>
        <label className='mb-2'>Title</label>
        <input type="text" value={title} onChange={ e => setTitle(e.target.value)} className='w-100 p-2' placeholder='Enter project title' />

        <label className='mb-2 mt-3'>Sub Title</label>
        <input type="text" value={subtitle} onChange={ e => setSubtitle(e.target.value)}  className='w-100 p-2' placeholder='Enter project Sub Title' />

        <label className='mb-2 mt-3'>Desktop Img Link</label>
        <input type="text" value={desktopImg} onChange={ e => setDesktopImg(e.target.value)}  className='w-100 p-2' placeholder='Enter Desktop Image link' />

        <label className='mb-2 mt-3'>Mobile Img Link</label>
        <input type="text" value={mobileImg} onChange={ e => setMobileImg(e.target.value)}  className='w-100 p-2' placeholder='Enter Mobile Image Link' />
        <CustomButton  onClick={handleUpdate} className="mt-3" >Submit</CustomButton>

        </div>

  </CustomModal>
  )
}
