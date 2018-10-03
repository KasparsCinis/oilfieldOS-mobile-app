import React from "react";
import { connect } from 'react-redux';
import Component from "../../../components/component";
import { activateLoader, disableLoader } from '../../common/Loader/Loader.container';
import Session from '../Session/Session';
import ProfileComponent from './Profile.component';
import history from "../../../components/history";
import {postProfileImage} from "./Profile.service";

class ProfileContainer extends Component {

    constructor(props) {
        super(props);

        /** global Camera */
        /* global Camera */
        if (window.cordova !== undefined) {
            navigator.camera.getPicture(
                function (imageURI) {
                    //var image = document.getElementById('myImage');

                    postProfileImage(imageURI)
                        .then(response => response.json())
                        .then(response => {
                            console.log(response);
                        });

                    console.log(imageURI);
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
        return <ProfileComponent

        />;
    }
}

const mapStateToProps = (state, ownProps) => ({
    error: ''
});


export default connect( mapStateToProps )(ProfileContainer);