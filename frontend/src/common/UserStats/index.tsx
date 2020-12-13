import React from 'react';

const UserStats = (): JSX.Element => {

    return (
        <div style={{display:"flex",justifyContent: "space-between", width: "110%"}}>
            
            <h5>Starting Weight</h5>
            <h5>Total Weight Change</h5>
            <h5>Weekly Average Weight Change</h5>
        </div>
    );
};

export default UserStats;
