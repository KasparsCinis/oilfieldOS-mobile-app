import React from 'react';
import Header from './Header.component';
import Session from "../../../bundles/user/Session/Session";

class HeaderContainer extends React.PureComponent {
    constructor(props) {
        super(props);

        this.state = {
            shouldShow: true,
            profileAnchorEl: null
        };

        this.lastScroll = null;

        this.handleScroll = this.handleScroll.bind(this);
        this.handleMenu = this.handleMenu.bind(this);
        this.handleClose = this.handleClose.bind(this);
        this.handleLogout = this.handleLogout.bind(this);
    }

    componentDidMount() {
        window.addEventListener('scroll', this.handleScroll, true);
    }

    componentWillUnmount() {
        window.removeEventListener('scroll', this.handleScroll, true);
    }

    handleMenu = event => {
        this.setState({ profileAnchorEl: event.currentTarget });
    };

    handleClose = () => {
        this.setState({ profileAnchorEl: null });
    };

    handleLogout = () => {

        this.setState({ profileAnchorEl: null });

        Session.logout();
    }

    handleScroll(event) {
        const lastScroll = event.target.scrollTop;

        if (lastScroll === this.lastScroll) {
            return;
        }

        const shouldShow = (this.lastScroll !== null) ?  (lastScroll < this.lastScroll) : this.state.shouldShow;

        if (shouldShow !== this.state.shouldShow) {
            this.setState((prevState, props) => ({
                ...prevState,
                shouldShow,
            }));
        }

        this.lastScroll = lastScroll;
    }

    render() {
        const { ...rest } = this.props;

        return (
            <Header
                isShown={this.state.shouldShow}
                handleMenu={this.handleMenu}
                handleClose={this.handleClose}
                handleLogout={this.handleLogout}
                profileAnchorEl={this.state.profileAnchorEl}
                {...rest}
            >
            </Header>
        );
    }
}

export default HeaderContainer;