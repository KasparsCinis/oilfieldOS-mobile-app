import React from "react";
import { connect } from 'react-redux';
import Component from "../../../components/component";
import ProfileComponent from './Profile.component';
import {postProfileImage} from "./Profile.service";

class ProfileContainer extends Component {

    constructor(props) {
        super(props);

        this.handleChangeProfilePicture = this.handleChangeProfilePicture.bind(this);
    }

    handleChangeProfilePicture() {
        /** global Camera */
        /* global Camera */
        if (window.cordova !== undefined) {
            navigator.camera.getPicture(
                function (imageURI) {
                    postProfileImage(imageURI)
                        .then(response => response.json())
                        .then(response => {
                            console.log(response);
                        });
                },
                function () {
                    console.log("No camera");
                }, {
                    quality: 25,
                    destinationType: Camera.DestinationType.DATA_URL
                });
        }
    }

    render() {
        const { user } = this.props;

        return <ProfileComponent
            user={user}

            handleChangeProfilePicture={this.handleChangeProfilePicture}
        />;
    }
}

const mapStateToProps = (state, ownProps) => ({
    error: '',
    user: state.session.user
});


export default connect( mapStateToProps )(ProfileContainer);