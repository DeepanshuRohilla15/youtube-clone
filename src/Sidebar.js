import React from 'react'
import "./Sidebar.css";
import SidebarRow from "./SidebarRow";
import HomeIcon from '@mui/icons-material/Home';
import WhatshotIcon from '@mui/icons-material/Whatshot';
import SubscriptionsIcon from '@mui/icons-material/Subscriptions';

function Sidebar() {
  return (
    <div className='sidebar'>
      <SidebarRow Icon={HomeIcon} title="Home"/>
      <SidebarRow Icon={WhatshotIcon} title="Trending"/>
      <SidebarRow Icon={SubscriptionsIcon} title="Subscription"/>
    </div>
  )
}

export default Sidebar
