import React from 'react';
import './Sidebar.css';
import HostipalIcon from "@material-ui/icons/LocalHospitalOutlined";
import EmojiIcon from "@material-ui/icons/EmojiFlagsOutlined";
import PeopleIcon from "@material-ui/icons/People";
import ChatIcon from "@material-ui/icons/Chat";
import StoreFrontIcon from "@material-ui/icons/StorefrontOutlined";
import VideoLibraryIcon from "@material-ui/icons/VideoLibraryOutlined";
import ExpandMoreIcon from '@material-ui/icons/ExpandMoreOutlined';
import SidebarRow from './SideBarRow';

const SideBar = () => {
    return (
      <div className="sidebar">
        <SidebarRow src="" title="Maharsh" />
        <SidebarRow Icon={HostipalIcon} title="COVID-19 Information Center" />
        <SidebarRow Icon={EmojiIcon} title="Pages" />
        <SidebarRow Icon={PeopleIcon} title="Friends" />
        <SidebarRow Icon={ChatIcon} title="Messenger" />
        <SidebarRow Icon={StoreFrontIcon} title="Marketplace" />
        <SidebarRow Icon={VideoLibraryIcon} title="Videos" />
        <SidebarRow Icon={ExpandMoreIcon} title="More" />
      </div>
    );
}

export default SideBar
