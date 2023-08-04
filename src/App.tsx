import React, {useState} from 'react';
import profilelogo from './assets/profile-circle.512x512-removebg-preview.png'
import './App.css';
import Sidebar from './Components/Sidebar';
import Hamburger from './Components/icon/hamburger'
import BurgerIcon from './Components/BurgerIcon/BurgerIcon';
import '../src/styles/sidebar.scss'
import Chats from './Components/icon/Chats';
import Home from './Components/icon/home'
import Analytics from './Components/icon/Analytics'

const menus = [
  {
    title: 'Home',
    icon: <Home/>,
    path: '/home',
  },
  {
    title: 'Chats',
    icon: <Chats/>,
    path: '/chats',
    subMenu: [
      {
        value: 'Chat 1',
        subPath: '/chats/chat1',
      },
      {
        value: 'Chat 2',
        subPath: '/chats/chat2',
      },
    ],
  },
  {
    title: 'Analytics',
    icon: <Analytics/>,
    path: '/analytics',
  },
];

function App() {
  const [toggle, setToggle] = useState(true);

  const handleToggle = () => {
    setToggle(!toggle)
  }

  return (
    <>
      <div className="sidebarContainer">
      <div className={toggle === true ? 'hideToggleicon' : 'showToggleicon'}><div onClick={() => setToggle(!toggle)}><Hamburger /></div></div>

      <Sidebar
      menus={menus}
      avatar={profilelogo}
      headerImage='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRmg6VbQr7k4bE8m1sGjODK19nEZn-UKVChBg&usqp=CA'
      heading='Sidebar'
      theme='light' email='jhondoe@gmail.com' name='Jhon Doe'collapse={toggle} dividerColor='white'
       />

      <div className={toggle === true ? 'righthamburger' : 'lefthamburger'}>
        <div className={toggle === true ? 'burgerContainer' : 'burgerContainer active'} onClick={handleToggle}>
          <BurgerIcon hideToggleIcon={false} />
        </div>
      </div>
      </div>
    </>
  )
}

export default App
