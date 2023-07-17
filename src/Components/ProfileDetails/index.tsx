import React from 'react';
import '../../styles/sidebar.scss'

interface IProps {
  className?: string;
  name: string;
  email: string;
  avatar: string

}

const ProfileDetails: React.FC<IProps> = (props) => {
  return (
    <>
      <img src={props.avatar} alt="avatar" />
      <div className='profileContents'>
        <p className="name">{props.name}</p>
        <p className='email'>{props.email}</p>
      </div>

    </>
  )
}

export default ProfileDetails
