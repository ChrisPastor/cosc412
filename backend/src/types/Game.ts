interface UserEntry {
    value: string | number,
    date: Date
}


interface GameUser {
    userId: string,
    values: UserEntry[]
}


interface Game {
    id: string,
    name: string,
    type: 'Solo' | 'Team Multi' | 'Solo Multi',
    metric: string,
    goal: string | number,
    users: GameUser[]

}

export {Game, GameUser, UserEntry};
