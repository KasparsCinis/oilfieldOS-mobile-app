import React, {Component} from "react";
import { connect } from 'react-redux';
import history from "../../../components/history";
import Session from "../../user/Session/Session";
import { store } from '../../../index';
import {openModal, closeModal} from "./Modal.actions";

import ChangeCompanyModal from "../../../modals/users/ChangeCompany.Modal";

class ModalContainer extends Component {

    constructor(props) {
        super(props);

        /**
         * If the user has logged in redirect to dashboard
         */
        if (Session.getCurrentUser() != null) {
            history.push('/dashboard');
        }
    }

    render() {
        const { modal, open } = this.props;

        let ModalElement = open ? modal : 'div';

        return <div>
            {open}
            <ModalElement/>
        </div>
    }
}

const mapStateToProps = (state, ownProps) => ({
    modal: state.modal.modal,
    open: state.modal.open
});

export default connect( mapStateToProps )(ModalContainer);

export function openModalElement(modal) {
    store.dispatch(openModal(modal));
}
export function closeModalElement() {
    store.dispatch(closeModal());
}