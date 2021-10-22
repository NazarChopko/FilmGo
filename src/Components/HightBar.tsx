import React, { ReactNode } from 'react'
import {useLocation,useHistory} from 'react-router-dom'
import { Button } from 'antd';
import {RollbackOutlined} from '@ant-design/icons'
import glass from '../libs/icon/glass.png'

interface IHightBar{
    children:ReactNode
}

const HightBar:React.FC<IHightBar> = ({children}) => {

    const {pathname} = useLocation()
    const history = useHistory()

    return (
        <div className='HightBarContainer'>
            <div className='HightBarContainer_itemName'><span>FilmGo</span><img src={glass} alt="" /></div>
            <div className='HightBarContainer_pagination'>
                { pathname.includes('/movieDetails')
                ? <Button className='backButton' onClick={()=> history.goBack()} ghost={true} >
                    <RollbackOutlined />
                </Button>
                : children          
            }
            </div>
        </div>

    )
}

export default HightBar
