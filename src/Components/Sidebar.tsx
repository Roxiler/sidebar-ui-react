import React,{useState,useLayoutEffect} from 'react'
import {SidebarData} from './SidebarData'
import '../styles/sidebar.scss'
import profilelogo from '../assets/profile-circle.512x512-removebg-preview.png'
import MenuItem from './MenuItem/MenuItem'
import ProfileDetails from '../Components/ProfileDetails/index'
import SubMenu from './SubMenu/SubMenu'
import BurgerIcon from './BurgerIcon/BurgerIcon'
import HeaderImage from './HeaderImage/HeaderImage'
import Chats from './icon/Chats'


type SidebarProps= {
color?:string
headerImg?:any
heading?:string
onClose?:()=>void
name?:any
email?:any
avatar?:any
subMenuLabel?:string
toggleSidebar?: React.Dispatch<React.SetStateAction<boolean>>


}

const Sidebar: React.FC<SidebarProps>= (props) =>{
  // const {color}=props

  const [close, setClose] = useState(false)
  const showSidebar = () => setClose(!close)
 const [theme, setTheme] = useState<'light' | 'dark'>('light')

  const [cssRootVariables, setcssRootVariable] = useState({})

  // const themeCheck ={
  //   '--fontColor':theme==='light'?'red':'black'

  // }

  useLayoutEffect(() => {
    setcssRootVariable({
      '--fontColor': theme === 'light' ?'#235c71':'white'
    })


  }, [theme])



  return (
    <>
      <div className={close === false ? "sidebar" : 'sidebar active'} style={cssRootVariables as React.CSSProperties}>
        <div className={close === false ? "logoContainer" : "logoContainer active"}>
          <HeaderImage heading='Sidebar' headerImage='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRmg6VbQr7k4bE8m1sGjODK19nEZn-UKVChBg&usqp=CAU'/>
      </div>
        <div className={close === false ? 'burgerContainer' : 'burgerContainer active'} onClick={showSidebar}>
          <BurgerIcon/>
      </div>
      <div className="profileContainer">
          <ProfileDetails name='Jhon Doe' email='jhondoe@gmail.com' avatar={profilelogo} />
      </div>
      <div className='contentsContainer'>
          <SubMenu className='check' subMenuStyle={{iconColor:'red'}} label='Data'>
          {SidebarData.map((ele,i)=>{
            return <><MenuItem key={i} icon={ele.icon} path={ele.path} title={ele.title} >
            </MenuItem>
            </>
          })}
        </SubMenu>
          <MenuItem  title='Chats' icon={<Chats/>}  path='/check'></MenuItem>
          
      </div>

    </div>

    </>
  )
}
export default Sidebar
