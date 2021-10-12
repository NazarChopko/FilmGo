import React from 'react'
import PaginationMenu from './Pagination'

const HightBar = ({children}:any) => {
    return (
        <div className='HightBarContainer'>
            <div className='HightBarContainer_itemName'>Movies</div>
            <div className='HightBarContainer_pagination'>
                {children}
            </div>
        </div>

    )
}

export default HightBar
