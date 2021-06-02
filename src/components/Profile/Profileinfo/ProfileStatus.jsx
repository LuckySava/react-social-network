// import Preloader from '../../Common/Preloader/preloader';
import React from 'react';
import s from './Profileinfo.module.scss';

class ProfileStatus extends React.Component {

    state = {
        editMode: false,
        status: this.props.status
    }

    activatedEditeMode = () => {
        this.setState({
            editMode:true,
        })
    }

    deactivateEditeMode = () => {
        this.setState({
            editMode:false,
        });

        this.props.updateStatus(this.state.status)
    }

    onStatusChange = (e) => {
        this. setState({
            status: e.target.value
        })
    }
    render() {

        return (
            <div className={s.status_wrapper}>
                {!this.state.editMode &&
                    <div>
                        <span onDoubleClick={this.activatedEditeMode} className={s.text_editMode}>{this.props.status || 'no set status'}</span>
                    </div>
                }

                {this.state.editMode &&
                    <div>
                        <input onChange={this.onStatusChange} autoFocus onBlur={this.deactivateEditeMode} className={s.editor_editMode} value={this.state.status} />
                    </div>
                }

            </div>

        )
    }

}

export default ProfileStatus;
