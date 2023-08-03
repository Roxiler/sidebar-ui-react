import React from 'react'
import Icon from './icon/home'
import Team from './icon/Team'
import Analytics from './icon/Analytics'
import Task from './icon/Task'
import DotIcon from './icon/DotIcon'

interface IProps{
  title:string,
  path:string,
  icon:React.ReactNode,
  subtasks?:any
}

export const SidebarData :IProps[] = [
  {
    title: 'Home',
    path: '/',
    icon: <Icon color='#235c71' size={30}/>,

  },
  {
    title: 'Team',
    path: '/team',
    icon: <Team/>,
  },
  {
    title: 'Tasks',
    path: '/tasks',
    icon: <Task />,
    subtasks:[
      {
        icon:<DotIcon/>,
        value:'Task 1',
        subpath:'tasks/task1'
      },
      {
        icon: <DotIcon />,
        value: 'Task 2',
        subpath: 'tasks/task2'
      },
      {
        icon: <DotIcon />,
        value: 'Task 3',
        subpath: 'tasks/task3'
      },
      {
        icon: <DotIcon />,
        value: 'Task 4',
        subpath: 'tasks/task4'
      }
    ]
  },

  {
    title: 'Analytics',
    path: '/analytics',
    icon: <Analytics/>,
  },

]
