// import Preloader from '../../Common/Preloader/preloader';
import React from 'react';
import { useState } from 'react';
import s from './Profileinfo.module.scss';

const ProfileStatusWithHooks = (props) => {



    let [editMode, setEditMode] = useState(false);
    let [status, setStatus] = useState(props.status);

    const activatedEditeMode = () => {
        setEditMode(true)
    }

    
   const deactivateEditeMode = () => {
        setEditMode(false)

        props.updateStatus(status)
    }

   const onStatusChange = (e) => {
        setStatus(e.target.value)
    }


        return (
            <div className={s.status_wrapper}>

                { !editMode &&
                    <div>
                        <span onDoubleClick={activatedEditeMode}  className={s.text_editMode}>{props.status || 'no set status..'}</span>
                    </div>
                }

                {editMode &&
                    <div>
                        {/* <input onChange={} autoFocus onBlur={} className={s.editor_editMode} value={} /> */}
                        <input onChange={onStatusChange} onBlur={deactivateEditeMode} autoFocus className={s.editor_editMode} value={status} />
                    </div>
                }

            </div>

        )
    

}

export default ProfileStatusWithHooks;