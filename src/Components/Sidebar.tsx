import React, {useLayoutEffect, useState} from 'react'
import ProfileDetails from '../Components/ProfileDetails/index'
import '../styles/sidebar.scss'
import HeaderImage from './HeaderImage/HeaderImage'
import MenuItem from './MenuItem/MenuItem'
import SubMenu from './SubMenu/SubMenu'


type SidebarProps = {
  headerImage?:string
  fontColor?: string
  backgroundColor?: string
  hoverContainerBackground?:string
  heading?: string
  name?: string,
  email?: string,
  avatar?: string
  collapse?: boolean
  dividerColor?: string
  theme?: 'light' | 'dark'
  hideToggleIcon?: boolean
  menus?: {title: string, icon: React.ReactNode, path: string, subMenu?: {value: string, subPath: string}[]}[]

}

const Sidebar: React.FC<SidebarProps> = (props) => {

  const [cssRootVariables, setcssRootVariable] = useState({})

  useLayoutEffect(() => {
    setcssRootVariable({
      '--fontColor': props.fontColor ? props.fontColor : props.theme == 'light' ? '#235c71' : 'white',
      '--sidebarBackground': props.backgroundColor ? props.backgroundColor : props.theme == 'light' ? '#d1f3ff' : '#202124',
      '--containerBackground': props.hoverContainerBackground ? props.hoverContainerBackground : props.theme === 'light' ? 'white' : '#235c71'
    })


  }, [props.theme])



  return (
    <>
      <div className="sidebarContainer">
        <div className={`${props.collapse === true ? "sidebar" : 'sidebar active'} mobileView`} style={cssRootVariables as React.CSSProperties}>

          <div className={props.collapse === true ? "logoContainer" : "logoContainer active"}>
            <HeaderImage heading={props.heading} headerImage={props.headerImage} />
          </div>

          <hr color={props.dividerColor} />

          <div className="profileContainer">
            <ProfileDetails name={props.name} email={props.email} avatar={props.avatar} />
          </div>

          <div className='contentsContainer'>
            {props.menus &&
              props.menus.map((menu, index) => (
                <React.Fragment key={index}>
                  {menu.subMenu ? (
                    <SubMenu label={menu.title}>
                      {menu.subMenu.map((subMenuItem, subIndex) => (
                        <MenuItem key={subIndex} icon={menu.icon} path={subMenuItem.subPath} title={subMenuItem.value}></MenuItem>
                      ))}
                    </SubMenu>
                  ) : (
                    <MenuItem icon={menu.icon} path={menu.path} title={menu.title}></MenuItem>
                  )}
                </React.Fragment>
              ))}
          </div>
        </div>
      </div>
    </>
  )
}
export default Sidebar
