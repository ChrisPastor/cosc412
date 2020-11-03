import mongoose from 'mongoose';

interface UserEntry {
    value: string | number,
    date: Date
}


interface GameUser extends mongoose.Document {
    id: string,
    gameId: string,
    rank: number, //not sure if we are going to keep this
    values: UserEntry[]
}


interface Game extends mongoose.Document {
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
