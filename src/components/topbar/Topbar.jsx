import React from 'react';
import './Topbar.css'; 
import {Search,Person,Chat,Notifications} from '@material-ui/icons';
export default function Topbar(){

return(
    <div className='topbarContainer'>
        <div className="topbarLeft">
            <span className="logo">Facebook</span>

        </div>
        <div className="topbarCenter">
            <div className="searchbar">
                <Search className="searchIcon" />
                <input placeholder="Search for friend" className="searchInput" />
            </div>
        </div>
        <div className="topbarRight">
            <div className="topbarLinks">
                <span className="topbarLink">Homepage</span>
                <span className="topbarLink">Timeline</span>
               
            </div>
            <div className="topbarIcons">
                <div className="topbarIconitems">
                    <Person/>
                    <span className="topbarIconBadge">1</span>
                </div>
            </div>

            <div className="topbarIcons">
                <div className="topbarIconitems">
                    <Chat/>
                    <span className="topbarIconBadge">1</span>
                </div>
            </div>




            <div className="topbarIcons">
                <div className="topbarIconitems">
                    <Notifications/>
                    <span className="topbarIconBadge">1</span>

                </div>
            </div>
            <img src="assets/person/5.jpeg" alt="sg" className="topbarImg" />

        </div>       
    </div>
);

}