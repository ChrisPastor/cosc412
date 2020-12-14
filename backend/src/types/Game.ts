interface UserEntry {
    value: number,
    date: string, //date
}


interface GameUser {
    id: string,
    userName: string,
    values: UserEntry[]
}


interface Game {
    id: string,
    name: string,
    type: 'solo' | 'team-multi' | 'solo-multi',
    metric: string,
    goal: number,
    users: GameUser[],
    completed: boolean

}

export {Game, GameUser, UserEntry};
