import React from 'react'


interface LeaderboardItemProps {
    userName: string,
    value: string | number,
    ranking: number,
    metric: string,
}

const LeaderboardItem = (props: LeaderboardItemProps) => {
    const {
        userName, 
        value, 
        ranking, 
        metric
    } = props;

    const metricString = `${metric}: ${value}`

    return (
        <div className="p-d-flex p-ai-start p-mb-2">
            <div>image placeholder</div>
            {/* className="p-mb-2" */}
            <div> 
                <div>{ranking}</div>
                <div>{userName}</div>
                <div>{metricString}</div>
            </div>
            
        </div>
        
    )
}

export {LeaderboardItem};