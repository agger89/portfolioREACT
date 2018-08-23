import { connect } from 'react-redux';
import Container from './container';

const mapStateToProps = (state, ownProps) => {
    const { user } = state;
    return {
        isLoggedIn: user.isLoggedIn
    }
}

// mapStateToProps 안에 isLoggedIn: user.isLoggedIn 를 Container 컴포넌트에 prop로 전달
export default connect(mapStateToProps)(Container)