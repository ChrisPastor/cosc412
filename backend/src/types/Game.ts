interface UserEntry {
    value: string | number,
    date: Date
}


interface GameUser {
    id: string,
    gameId: string,
    values: UserEntry[]
}


interface Game {
    id: string,
    name: string,
    type: 'Solo' | 'Team Multi' | 'Solo Multi',
    metric: string,
    goal: string | number,
    Users: {
        [key: string]: string,
    }

}

export {Game, GameUser, UserEntry};
