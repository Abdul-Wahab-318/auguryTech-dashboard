import React , {useEffect , useState} from 'react'
import CustomDataGrid from '../CustomDataGrid/CustomDataGrid.jsx'
import { getProjects } from '../../api/api.js'
import CustomButton from '../CustomButton/CustomButton.jsx'
import UpdateProjectModal from '../UpdateProjectModal/UpdateProjectModal.jsx'


export default function ProjectGrid() {

    const [rows , setRows] = useState([])

    const columns = [
        { field: '_id', headerName: 'ID', flex: 1},
        {
          field: 'title',
          headerName: 'Title',
          flex: 1,
          editable: false,
        },
        {
          field: 'subtitle',
          headerName: 'Sub Title',
          flex: 1,
          editable: false,
        },
        {
          field: 'Edit',
          headerName: 'Edit',
          flex: 1,
          renderCell : (params) => {
            
            const [open,setOpen] = useState(false)

                return ( 
                  <>
                    <CustomButton onClick={(e)=>setOpen(state=>!state)}>Edit</CustomButton> 
                    <UpdateProjectModal open={open} setOpen={setOpen} setRows={setRows} project={params.row} />
                  </>
              )
            }
        },
        {
          field: 'Delete',
          headerName: 'Delete',
          flex: 1,
          renderCell : (params) => {
            return <CustomButton>Delete</CustomButton>
            }
        }
    ]
    
    const fetchProjects = async () => {
        try{
            let data = await getProjects()
            setRows(data)
        }
        catch(err)
        {
            console.log(err)
        }
    }

    useEffect(() => { 
        fetchProjects()
    },[])

  if ( rows?.length === 0)

    return <h1 className='fs-2 text-center'>No Projects Found</h1>

  return (
    <>
      <CustomDataGrid rows={rows} columns={columns}  />
    </>
  )
}
