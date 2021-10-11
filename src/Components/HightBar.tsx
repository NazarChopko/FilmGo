import React from 'react'
import PaginationMenu from './Pagination'

const HightBar = () => {
    return (
        <div className='HightBarContainer'>
            <div className='HightBarContainer_itemName'>Movies</div>
            <div className='HightBarContainer_pagination'>
                <PaginationMenu/>
            </div>
        </div>

    )
}

export default HightBar
