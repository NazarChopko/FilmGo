import { Pagination } from 'antd';
import React, {useState} from 'react'





const PaginationMenu = () => {

 const [current,setCurrent] = useState(3);
 console.log(current)
  
 
 const paginationHandler = (e:any,page:any) =>{
     if(page){
         setCurrent(page)
     }
     setCurrent(e)
 }
    return (
        <div>
            <Pagination current={current} onChange={paginationHandler} showSizeChanger={false} total={100} />;
        </div>
    )
}

export default PaginationMenu


