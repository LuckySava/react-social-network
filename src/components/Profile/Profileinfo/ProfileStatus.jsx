// import Preloader from '../../Common/Preloader/preloader';
import React from 'react';
import s from './Profileinfo.module.scss';

class ProfileStatus extends React.Component {

    state = {
        editMode: false,
    }

    activatedEditeMode = () => {
        this.setState({
            editMode:true,
        })
    }

    deactivateEditeMode = () => {
        this.setState({
            editMode:false,
        })
    }
    render() {
        return (
            <div className={s.status_wrapper}>

                {!this.state.editMode &&
                    <div>
                        <span onDoubleClick={this.activatedEditeMode} className={s.text_editMode}>{this.props.status}</span>
                    </div>
                }

                {this.state.editMode &&
                    <div>
                        <input autoFocus onBlur={this.deactivateEditeMode} className={s.editor_editMode} value={this.props.status} />
                    </div>
                }

            </div>

        )
    }

}

export default ProfileStatus;
