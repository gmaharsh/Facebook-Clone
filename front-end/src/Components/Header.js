import React from 'react';
import './Header.css';
import Search from '@material-ui/icons/Search';
import HomeIcon from '@material-ui/icons/Home';
import FlagIcon from '@material-ui/icons/FlagOutlined';
import SubscriptionsIcon from '@material-ui/icons/SubscriptionsOutlined';
import StoreFrontIcon from '@material-ui/icons/StorefrontOutlined';
import SupervisedUserCircleIcon from '@material-ui/icons/SupervisedUserCircleOutlined';
import { Avatar, Icon, IconButton } from '@material-ui/core';
import AddIcon from "@material-ui/icons/Add";
import ForumIcon from "@material-ui/icons/Forum";
import NotificationIcon from "@material-ui/icons/NotificationsActive";
import ExpandMoreIcon from "@material-ui/icons/ExpandMore";

const Header = () => {
    return (
        <div className="header">
            <div className="header__left">
                <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/0/05/Facebook_Logo_%282019%29.png/1024px-Facebook_Logo_%282019%29.png" alt="Facebook Logo" />
            </div>
            <div className="header__input">
                <Search />
                <input />
            </div>
            <div className="header__center">
                <div className="header__option header__option--active">
                    <IconButton>
                        <HomeIcon fontSize="large" />
                    </IconButton>
                </div>
                <div className="header__option">
                    <IconButton>
                        <FlagIcon fontSize="large" />
                    </IconButton>
                </div>
                <div className="header__option">
                    <IconButton>
                        <SubscriptionsIcon fontSize="large" />
                    </IconButton>
                </div>
                <div className="header__option">
                    <IconButton>
                        <StoreFrontIcon fontSize="large" />
                    </IconButton>
                </div>
                <div className="header__option">
                    <IconButton>
                        <SupervisedUserCircleIcon fontSize="large" />
                    </IconButton>
                </div>
            </div>
            <div className="header__right">
                <div className="header__info">
                    <Avatar />
                    <h4>Maharsh Hetal Gheewala</h4>
                </div>
                <IconButton>
                    <AddIcon />
                </IconButton>
                <IconButton>
                    <ForumIcon />
                </IconButton>
                <IconButton>
                    <NotificationIcon />
                </IconButton>
                <IconButton>
                    <ExpandMoreIcon />
                </IconButton>
            </div>
        </div>
    )
}

export default Header
