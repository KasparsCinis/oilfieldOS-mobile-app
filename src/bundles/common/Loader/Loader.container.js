import { connect } from 'react-redux';
import Loader from './Loader';

let isLoading = false;

const mapStateToProps = (state, ownProps) => ({
    isLoading: isLoading
});

export default connect( mapStateToProps )(Loader);

export function activateLoader() {
    isLoading = true;
}
export function disableLoader() {
    isLoading = false;
}