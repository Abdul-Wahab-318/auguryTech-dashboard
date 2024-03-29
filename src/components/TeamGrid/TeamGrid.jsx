import React , {useEffect , useState} from 'react'
import CustomDataGrid from '../CustomDataGrid/CustomDataGrid.jsx'
import { getTeam } from '../../api/api.js'
import CustomButton from '../CustomButton/CustomButton.jsx'
import UpdateEmployeeModal from '../UpdateEmployeeModal/UpdateEmployeeModal.jsx'


export default function TeamGrid() {

    const [rows , setRows] = useState([])

    const columns = [
        { field: '_id', headerName: 'ID', flex: 1},
        {
          field: 'name',
          headerName: 'Name',
          flex: 1,
          editable: false,
        },
        {
          field: 'title',
          headerName: 'Title',
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
                    <UpdateEmployeeModal open={open} setOpen={setOpen} setRows={setRows} employee={params.row} />
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
    
    const fetchTeam = async () => {
        try{
            let data = await getTeam()
            setRows(data)
        }
        catch(err)
        {
            console.log(err)
        }
    }

    useEffect(() => { 
        fetchTeam()
    },[])

  if ( rows.length === 0)

    return <h1 className='fs-2 text-center'>No Employees Found</h1>

  return (
    <>
      <CustomDataGrid rows={rows} columns={columns}  />
    </>
  )
}
