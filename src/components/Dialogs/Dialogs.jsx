import { NavLink } from 'react-router-dom'
import s from './Dialogs.module.scss'

const Dialogs = () => {
    return(
        <div className={s.dialogs}>

           <div className={s.dialogs_items}>
               <ul>
                   <li className={s.dialog}>
                       <NavLink to='/dialogs/1' activeClassName={s.active}>Dimych</NavLink>
                   </li>
                   <li className={s.dialog}>
                       <NavLink to='/dialogs/2' activeClassName={s.active}>ALex</NavLink>
                   </li>
                   <li className={s.dialog}>
                       <NavLink to='/dialogs/3' activeClassName={s.active}>Olga</NavLink>
                   </li>
                   <li className={s.dialog}>
                       <NavLink to='/dialogs/4' activeClassName={s.active}>Ira</NavLink>
                   </li>
                   <li className={s.dialog}>
                       <NavLink to='/dialogs/5' activeClassName={s.active}>Ivan</NavLink>
                   </li>
                   <li className={s.dialog}>
                       <NavLink to='/dialogs/6' activeClassName={s.active}>Valera</NavLink>
                   </li>
                   <li className={s.dialog}>
                       <NavLink to='/dialogs/7' activeClassName={s.active}>Nina</NavLink>
                   </li>
               </ul>
           </div>

           <div className={s.messages}>
               <div className={s.message}>
                   how are you
               </div>
               <div className={s.message}>
                   Are you OK?
               </div>
               <div className={s.message}>
                   Yeah, I'm still alive
               </div>
           </div>
           
        </div>
    )
}

export default Dialogs;