import React from 'react';
import PropTypes from 'prop-types';
import Header from './Header.component';

class HeaderContainer extends React.PureComponent {
    constructor(props) {
        super(props);

        this.state = {
            shouldShow: true,
        };

        this.lastScroll = null;

        this.handleScroll = this.handleScroll.bind(this);
        // Alternatively, you can throttle scroll events to avoid
        // updating the state too often. Here using lodash.
        // this.handleScroll = _.throttle(this.handleScroll.bind(this), 100);
    }

    componentDidMount() {
        window.addEventListener('scroll', this.handleScroll, true);
    }

    componentWillUnmount() {
        window.removeEventListener('scroll', this.handleScroll);
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
        const { classes, ...rest } = this.props;
        return (
            <Header
                isShown={this.state.shouldShow ? true : false}
                {...rest}
            >
            </Header>
        );
    }
}

HeaderContainer.propTypes = {
    classes: PropTypes.object.isRequired,
};

export default HeaderContainer;