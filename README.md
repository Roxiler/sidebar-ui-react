React Sidebar

# Table of contents

1. [Installation](#installation)
2. [Demo](#demo)
3. [Basic Usage](#basic-usage)

# Installation

- Using NPM
  `npm i `

- Using Yarn
  `yarn add `



  # Basic Usage of Sidebar

  import {Sidebar} from "react-sidebar"

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

<Sidebar
      menus={menus}
      avatar={profilelogo}
      headerImage='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRmg6VbQr7k4bE8m1sGjODK19nEZn-UKVChBg&usqp=CA'
      heading='Sidebar'
      theme='light' email='jhondoe@gmail.com' name='Jhon Doe'collapse={toggle} dividerColor='white'
       />
