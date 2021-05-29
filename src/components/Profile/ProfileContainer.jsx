import axios from 'axios';
import React from 'react';
import { connect } from 'react-redux';
import Profile from "./Profile";
import { getUserProfile } from '../../Redux/profile-reducer'
import { Redirect, withRouter } from 'react-router';
import { userAPI } from '../../api/api';

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

let mapStateToProps = (state) => ({
    profile: state.profilePage.profile,
    isAuth: state.auth.isAuth,
});

let WithUrlDataContainerCompnent = withRouter(ProfileContainer)

export default connect(mapStateToProps, { getUserProfile })(WithUrlDataContainerCompnent);
