import React, { useEffect, useState } from 'react';
import { fetchData } from '../api/api';


const List = ({ title, param }) => {
  console.log(title,"tits")
    const [list, setList] = useState([]);
    useEffect(()=>{
      fetchData(param).then( res => setList(res.data.results))
    },[]);
    console.log(list)




    return (
        <div className='list'>



        <div className='list-1 '>
          <h1 className='text-light ms-3 fw-bolder mb-4 pt-4 fs-2 '>{title}</h1>
          <div className='d-flex'>
           <div className='list-box ms-3 me-3 d-flex gap-2'>
                   <img className='list-box-1' src="https://picfiles.alphacoders.com/367/367840.jpg" alt=""/>
                   <div class="overlay">
    <div class="text">Hello World</div>
  </div>
           </div>
           <div className='list-box ms-3 me-3 d-flex gap-2'>
         
            
         <img className='list-box-1' src="https://picfiles.alphacoders.com/367/367840.jpg" alt=""/>
         <div class="overlay">
    <div class="text">Hello World</div>
  </div>
           
 </div>
 <div className='list-box ms-3 me-3 d-flex gap-2'>
         
            
         <img className='list-box-1' src="https://picfiles.alphacoders.com/367/367840.jpg" alt=""/>
         <div class="overlay">
    <div class="text">Hello World</div>
  </div>
           
 </div>
           

           </div>
           </div>


           
        </div>
        
    );
};

export default List;