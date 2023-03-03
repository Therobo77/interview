import React ,{useEffect,useState}from 'react'

const ApiFetch = () => {


    const [data,setData] = useState([])

    useEffect(()=>{
        fetchData()
    },[])

    const fetchData = () => {
        fetch(`https://jsonplaceholder.typicode.com/users`)
        .then((data)=>{
            data.json()
        })
        .then((res)=>{
            setData(res)
        })
    }
  return (
    <div>
    <button>onc</button>
    <ul>
        {
            data.map((item)=>{
                return(
                    <li key={item.id}>{item.id}</li>
                )
            })
        }
    </ul>

    </div>
  )
}

export default ApiFetch