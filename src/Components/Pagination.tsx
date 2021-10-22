import { Pagination } from 'antd';
import React, {useState} from 'react'


interface IPaginationMenu{
    currentPage:number
    setCurrentPage:(e:number) => void
}

const PaginationMenu:React.FC<IPaginationMenu> = ({setCurrentPage,currentPage}) => {

 const [current,setCurrent] = useState<number>(currentPage);
 
  
 
 const paginationHandler = (e:number) =>{
    setCurrent(e);
    setCurrentPage(e)
}
  
return (
        <div>
            <Pagination className='paginationButton' current={current} onChange={paginationHandler} showSizeChanger={false} total={10000} />;
        </div>
    )
}

export default PaginationMenu


