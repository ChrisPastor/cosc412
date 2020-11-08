import React from 'react'
import {UserInfo} from './UserInfo';
import UserStats from '../../common/UserStats'


const ProfilePage = ()=>{ 

return (
    <div>
        <div style = {{
            margin:"18px 0px"
        }}>
            <div>
                <UserInfo />
                <UserStats/>
            </div>
        </div>
    </div>



)




}
export default ProfilePage;