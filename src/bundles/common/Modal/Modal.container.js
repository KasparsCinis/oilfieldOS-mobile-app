import React, {Component} from "react";
import { connect } from 'react-redux';
import history from "../../../components/history";
import Session from "../../user/Session/Session";
import { store } from '../../../index';
import {openModal, closeModal} from "./Modal.actions";

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
        const { modal, open, modalConfig } = this.props;

        let ModalElement = open ? modal : 'div';

        return <div>
            {open}
            <ModalElement modalconfig={modalConfig}/>
        </div>
    }
}

const mapStateToProps = (state) => ({
    modal: state.modal.modal,
    open: state.modal.open,
    modalConfig: state.modal.config
});

export default connect( mapStateToProps )(ModalContainer);

export function openModalElement(modal, config = {}) {
    store.dispatch(openModal(modal, config));
}
export function closeModalElement() {
    store.dispatch(closeModal());
}