import { Pagination } from 'antd';
import React, {useState} from 'react'

const PaginationMenu = ({setPage,page}:any) => {

 const [current,setCurrent] = useState<number>(page);
 
  
 
 const paginationHandler = (e:any) =>{
    setCurrent(e);
    setPage(e);
}
  
return (
        <div>
            <Pagination current={current} onChange={paginationHandler} showSizeChanger={false} total={100} />;
        </div>
    )
}

export default PaginationMenu


