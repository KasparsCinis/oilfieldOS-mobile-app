import React, { Component } from 'react';
import Avatar from '@material-ui/core/Avatar';
import {config} from "../config";

class UserAvatar extends Component {
    render() {
        const { user } = this.props;

        return (
            <Avatar
                src={(user.params['profile_picture'] !== undefined) ? config.main_domain_url + '/files/profile-pictures/' + user.params['profile_picture'] : null}
                style={{backgroundColor:'orange'}}
            >{user.firstName.substring(0, 1) + user.lastName.substring(0, 1)}</Avatar>
        )
    }
}

export default UserAvatar;
