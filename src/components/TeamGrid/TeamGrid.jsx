import React , {useEffect , useState} from 'react'
import CustomDataGrid from '../CustomDataGrid/CustomDataGrid.jsx'
import { getTeam } from '../../api/api.js'
import CustomButton from '../CustomButton/CustomButton.jsx'

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
                return <CustomButton>Edit</CustomButton>
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

  return (
    <CustomDataGrid rows={rows} columns={columns}  />
  )
}
