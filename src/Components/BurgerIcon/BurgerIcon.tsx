import React from 'react'
import '../BurgerIcon/BurgerIcon.scss'

interface IProps{
  hideToggleIcon?:boolean

}

const BurgerIcon:React.FC<IProps>=(props)=>{
  return(
    <>
    <div hidden={props.hideToggleIcon} >
    <div className='burgerTrigger'></div>
    <div className='burgerMenu'></div>
    </div>
    </>
  )
}
export default BurgerIcon
