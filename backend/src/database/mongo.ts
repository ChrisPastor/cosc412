import {Db, MongoClient, MongoError} from "mongodb";

const uri: string = (process.env.DB_URL as string)

//todo: this will need to be updated with more objects and/or types as we know what to pass to it
export interface MongoCRUDParams {
    collection: string,
    data: [{ [key: string]: any }] | { [key: string]: any }
}

type MongoCRUDFunction = (err: MongoError, db: Db, otherArgs: MongoCRUDParams) => void

export interface MongoConnectionParams {
    callback: MongoCRUDFunction,
    params: MongoCRUDParams
}

//todo: look into creating indexes
export function mongoConnectWrapper(args: MongoConnectionParams) {
    const {callback, params} = args;

    MongoClient.connect(uri, {useUnifiedTopology: true}, (err, client) => {
        if (err) {
            throw err;
        }

        const db = client.db();

        callback(err, db, params);

        client.close((err) => {
            console.log(`An error occurred closing the client: ${err}`);
        });
    });
}

export const insertOneWrapper: MongoCRUDFunction = (err, db, otherArgs) => {
    if (err) {
        throw err;
    }

    const {collection, data} = otherArgs;

    db.collection(collection).insertOne(data, (error, res) => {
        if (!error) {
            console.log(`Insert Completed successfully: ${res.result.ok}`);
        } else {
            console.log(`An error occurred: ${error}`);
        }
    });
}
