import React from 'react'
import * as FaIcons from 'react-icons/fa'
import Icon from './icon/home'
import Team from './icon/Team'
import Analytics from './icon/Analytics'
import Task from './icon/Task'

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
    icon: <Icon size={30}/>,

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
        value:'Task 1',
        subpath:'tasks/task1'
      },
      {
        value: 'Task 2',
        subpath: 'tasks/task2'
      },
      {
        value: 'Task 3',
        subpath: 'tasks/task3'
      },
      {
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
