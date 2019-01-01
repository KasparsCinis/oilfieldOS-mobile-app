import React, { Component } from 'react';
import Avatar from '@material-ui/core/Avatar';

class UserBox extends Component {

    render() {
        const { user, style } = this.props;

        let baseStyle = {width:'50%',float:'left', padding:'5px 0px'};

        return (
            <div style={{...baseStyle, ...style}}>
                <Avatar src={null} style={{backgroundColor:'orange',float:'left'}}>
                    {user.firstName.substring(0, 1) + user.lastName.substring(0, 1)}
                </Avatar>
                <div style={{maxWidth:'calc(100% - 40px)',paddingLeft:'10px',paddingTop:'10px',
                    overflow:'hidden', whiteSpace:'nowrap'}}
                >
                    {user.firstName} {user.lastName}
                </div>
            </div>
        )
    }
}

export default UserBox;
