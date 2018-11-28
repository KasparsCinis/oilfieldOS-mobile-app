import React from 'react';
import Component from "../../components/component";
import Button from '@material-ui/core/Button';
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogTitle from '@material-ui/core/DialogTitle';
import {closeModalElement} from "../../bundles/common/Modal/Modal.container";
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText';
import {connect} from "react-redux";
import Session from "../../bundles/user/Session/Session";

class ChangeCompanyModal extends Component {

    constructor(props) {
        super(props);

        this.state = {
            open: true
        }
    }

    handleClose = () => {
        this.setState({ open: false });

        closeModalElement();
    };

    handleCompanyChange = (toCompany) => {
        Session.setActiveCompany(toCompany);

        this.handleClose();
    };

    render() {
        const { companies } = this.props;

        return <Dialog
            open={this.state.open}
            onClose={this.handleClose}
            scroll='paper'
        >
            <DialogTitle>Choose Company</DialogTitle>
            <DialogContent>
                <List>
                    {Object.values(companies).map(company => (
                        <ListItem button onClick={() => this.handleCompanyChange(company.id)} key={company.id}>
                            <ListItemText primary={company.name} />
                        </ListItem>
                    ))}
                </List>
            </DialogContent>
            <DialogActions>
                <Button onClick={this.handleClose} color="primary">
                    Cancel
                </Button>
            </DialogActions>
        </Dialog>
    }
}

const mapStateToProps = (state, ownProps) => ({
    companies: state.session.user.companies,
});

export default connect( mapStateToProps )(ChangeCompanyModal);