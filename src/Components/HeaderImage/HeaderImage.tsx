import React from 'react'
import '../../styles/sidebar.scss'

interface IProps {
  headerImage:string,
  heading:string

}

const HeaderImage: React.FC<IProps> = (props) =>{
  return(
    <>
    <img className='logo' width='33px' src={props.headerImage} alt="logo" />
      <div className='headerContent'><h2 className='title'>{props.heading}</h2></div>
    </>
  )
}

export default HeaderImage
