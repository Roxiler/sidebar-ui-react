import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import '../MenuItem/MenuItem.scss'

interface IProps {
  title: string;
  icon:any;
  path:string;
  className?: string;
  children?:any
}

const MenuItem:React.FC<IProps>=({className,children,...props})=>{
  const location = useLocation()
  return (
    <>
    <ul>
        <li className={location.pathname === props.path ? 'active' : ""}>
        <Link className='menuLink' to={props.path}>
            <div className='icon'>{props.icon}<span className="tooltiptext">{props.title}</span></div>
            <div className='title'>{props.title} </div>
        </Link>
        </li>
    </ul>
    </>
  )
}
export default MenuItem
