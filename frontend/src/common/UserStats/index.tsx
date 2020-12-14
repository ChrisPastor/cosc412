import React from 'react';
interface UserStatsProps {
        goal: number,
        starting: number,
        current: number
}

const UserStats = (props : UserStatsProps): JSX.Element => {
const {goal, starting, current} = props


    return (
        <div style={{display:"flex",justifyContent: "space-between", width: "110%"}}>
            <div >
                <h5>Goal Weight</h5> 
                <div>{goal} lbs</div>
            </div>

            <div> 
                <h5>Starting Weight</h5>
                <div>{starting} lbs </div>
            </div> 

            <div>
                <h5>Current Weight</h5>
                <div>{current} lbs </div>
            </div> 

            <div>
                <h5>Total Weight Change</h5> 
                <div>{starting - current} lbs </div>
            </div>

            <div>
                <h5>Weight Change Until Goal</h5>
                <div>{current - goal} lbs</div>
            </div>


        </div>
    );
};
export default UserStats;