import React from 'react'
import '../../styles/sidebar.scss'
import '../HeaderImage/HeaderImage.scss'

interface IProps {
  headerImage:string,
  heading:string

}

const HeaderImage: React.FC<IProps> = (props) =>{
  return(
    <>
    <img className='logo' src={props.headerImage} alt="logo" />
    <h2 className='title'>{props.heading}</h2>
    </>
  )
}

export default HeaderImage
