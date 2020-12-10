interface UserEntry {
    value: string | number,
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
    goal: string | number,
    users: GameUser[],
    completed: boolean

}

export {Game, GameUser, UserEntry};
