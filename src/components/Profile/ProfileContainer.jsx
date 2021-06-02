import React from 'react';
import { connect } from 'react-redux';
import Profile from "./Profile";
import { getUserProfile, getStatus, updateStatus } from '../../Redux/profile-reducer'
import { withRouter } from 'react-router';
import { withAuthRedirect } from '../../hoc/withAuthRedirect';
import { compose } from 'redux';

class ProfileContainer extends React.Component {

    componentDidMount() {
        let userId = this.props.match.params.userId;
        if (!userId) userId = 17324;

        this.props.getUserProfile(userId);
        this.props.getStatus(userId);
        // this.props.updateStatus(this.props.status)

    }

    render() {
        return <Profile {...this.props} profile={this.props.profile} status={this.props.status} updateStatus={this.props.updateStatus} />
    }
}

let mapStateToProps = (state) => ({
    profile: state.profilePage.profile,
    status: state.profilePage.status
});

// HOC comonent

// let AuthRedirectComponent = withAuthRedirect(ProfileContainer);

// let WithUrlDataContainerCompnent = withRouter(AuthRedirectComponent)

// export default connect(mapStateToProps, { getUserProfile })(WithUrlDataContainerCompnent);

////////////

export default compose(
    connect(mapStateToProps, { getUserProfile, getStatus, updateStatus }),
    withRouter,
    // withAuthRedirect
)(ProfileContainer)
