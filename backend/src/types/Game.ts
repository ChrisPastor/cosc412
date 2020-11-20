interface UserEntry {
    value: string | number,
    date: Date
}


interface GameUser {
    id: string,
    userName: string,
    values: UserEntry[]
}


interface Game {
    id: string,
    name: string,
    type: 'Solo' | 'Team Multi' | 'Solo Multi',
    metric: string,
    goal: string | number,
    users: GameUser[],
    completed: boolean

}

export {Game, GameUser, UserEntry};
