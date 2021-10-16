import React, { ReactNode } from 'react'
import {useLocation,useHistory} from 'react-router-dom'

interface IHightBar{
    children:ReactNode
}

const HightBar:React.FC<IHightBar> = ({children}) => {

    const {pathname} = useLocation()
    const history = useHistory()

    return (
        <div className='HightBarContainer'>
            <div className='HightBarContainer_itemName'>Movies</div>
            <div className='HightBarContainer_pagination'>
                { pathname.includes('/movieDetails')
                ? <button onClick={()=> history.goBack()}>back</button>
                : children          
            }
            </div>
        </div>

    )
}

export default HightBar
