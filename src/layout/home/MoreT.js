import React from 'react'
import NotificationsNoneOutlinedIcon from '@material-ui/icons/NotificationsNoneOutlined';
import MonetizationOnOutlinedIcon from '@material-ui/icons/MonetizationOnOutlined';
import LiveHelpOutlinedIcon from '@material-ui/icons/LiveHelpOutlined';
import TrendingUpOutlinedIcon from '@material-ui/icons/TrendingUpOutlined';
import GetAppRoundedIcon from '@material-ui/icons/GetAppRounded';
import './slide.css';

const MoreT = () => {
    return (
        <div className="moret">

            <div className="more">
                <NotificationsNoneOutlinedIcon />

                <p>Notification preference</p>
            </div>
            <hr />

            <div className="more">
                <MonetizationOnOutlinedIcon />
                <p>Sell on mobiKart</p>

            </div>
            <hr />

            <div className="more">
                <LiveHelpOutlinedIcon />
                <p>24*7 Customer Care</p>
            </div>
            <hr />

            <div className="more">
                <GetAppRoundedIcon />
                <p>Download App</p>
            </div>
            <hr />


        </div>
    )
}

export default MoreT
