import React from 'react'
import '../BurgerIcon/BurgerIcon.scss'

interface IProps{

}

const BurgerIcon:React.FC<IProps>=()=>{
  return(
    <>
    <div className='burgerTrigger'></div>
    <div className='burgerMenu'></div>
    </>
  )
}
export default BurgerIcon
