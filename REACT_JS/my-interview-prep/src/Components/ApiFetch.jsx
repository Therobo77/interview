// import React, { useEffect, useState } from 'react'

// const ApiFetch = () => {

//     const [data,setData] = useState([])

//     useEffect(() => {
//         fetchData()
//     }, [])

//     const fetchData =()=>{
//         console.log("hello world")
//         fetch(`https://jsonplaceholder.typicode.com/users`)
//         .then((data)=>data.json())
//         .then((response)=>{
//             console.log(response)
//             setData(response)

//         })
//     }
//   return (
//     <div>
//         {/* <button onClick={fetchData}>OnClick</button> */}
//         <div>
//             <ul>
//                 {
//                     data.map((item)=>{
//                         return(
//                         <li key={item.id}>{item.id}</li>
//                         )
//                     })
//                 }
//             </ul>
//         </div>
//     </div>
//   )
// }

// export default ApiFetch



import React ,{useEffect,useState}from 'react'

const ApiFetch = () => {


    const [data,setData] = useState([])

    useEffect(()=>{
        return(
        fetchData()
        )
    },[])


    const fetchData = () => {
        console.log("hello world")
        fetch(`https://jsonplaceholder.typicode.com/users`)
        .then((data)=>data.json())
        .then((res)=>{
            setData(res)
        })
    }
  return (
    <div>
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