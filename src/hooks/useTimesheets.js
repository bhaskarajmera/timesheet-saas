import { useEffect,useState } from "react"
import axios from "axios"

export default function useTimesheets(){

  const [data,setData] = useState([])
  const [loading,setLoading] = useState(true)

  useEffect(()=>{

    async function fetchData(){

      try{
        const res = await axios.get("/api/timesheets")
        setData(res.data)
      }catch(err){
        console.error(err)
      }finally{
        setLoading(false)
      }

    }

    fetchData()

  },[])

  return {data,loading}
}