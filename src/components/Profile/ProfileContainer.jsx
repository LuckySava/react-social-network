import axios from 'axios';
import React from 'react';
import { connect } from 'react-redux';
import Profile from "./Profile";
import { getUserProfile } from '../../Redux/profile-reducer'
import { Redirect, withRouter } from 'react-router';
import { userAPI } from '../../api/api';
import { withAuthRedirect } from '../../hoc/withAuthRedirect';

class ProfileContainer extends React.Component {
    componentDidMount() {
        let userId = this.props.match.params.userId;
        if (!userId) userId = 2;

        this.props.getUserProfile(userId);
    }

    render() {
        
        return <Profile {...this.props} profile={this.props.profile} />
    }
}

// HOC comonent

let AuthRedirectComponent = withAuthRedirect(ProfileContainer)

let mapStateToProps = (state) => ({
    profile: state.profilePage.profile,
});

let WithUrlDataContainerCompnent = withRouter(AuthRedirectComponent)

export default connect(mapStateToProps, { getUserProfile })(WithUrlDataContainerCompnent);
