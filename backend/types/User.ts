import mongoose from 'mongoose';

interface User extends mongoose.Document {
    id: string,
    friends: string[],
    games: string[],
    bio: string,

}

export {User}
