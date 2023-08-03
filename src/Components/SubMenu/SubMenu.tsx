import React from 'react';
import '../SubMenu/Submenu.scss'
import '../../styles/sidebar.scss'
import {useState} from 'react';
import Data from '../icon/data';
import DownArrow from '../icon/DownArrow';

interface SubMenuProps {
  value?: string;
  label?:string;
  subpath?: string;
  className?: string;
  children?:any
  onClick?:()=>void;
  subMenuStyle?:SubMenuStyles

}
interface SubMenuStyles{
  iconColor?:string,
  hoverColor?:string
  tooltipBorderColor?:string
  tooltipBagroundColor?:string
  tooltipColor?:string
}

const SubMenu:React.FC<SubMenuProps>=({className,children,...props})=>{
  const [show,setShow]=useState(false)
  const handleShow=()=>setShow(!show)

  return(
    <>
    <div>
        <div className={'subMenuContainer'} onClick={handleShow} >
          <div className={'Submenuicon'}><Data /><span className="tooltiptext">{props.label}</span></div>
        <div className='title'>{props.label}</div>
        <div className='icon2'><DownArrow/></div>
    </div>
        <div className={show === false ?'collapseMenu':"showCollapse"}>{children}</div>
      </div>

    </>
  )

}

export default SubMenu
