import {Db, FilterQuery, MongoClient} from "mongodb";

//todo: this will need to be updated with more objects and/or types as we know what to pass to it
export interface MongoSingleCRUDParams {
    collection: string,
    data: object,
    filter: FilterQuery<any> //if no filter values are needed this can be {}
    options?: object,
}

export interface MongoManyCRUDParams {
    collection: string,
    data: object[],
    filter: FilterQuery<any> //if no filter values are needed this can be {}
    options?: object,
}

//todo: figure out the types we need to return other than void
export type MongoCRUDFunction = (db: Db, otherArgs: MongoSingleCRUDParams | MongoManyCRUDParams) => Promise<void | Array<Object>>

export interface MongoConnectionParams {
    CRUDFunction: MongoCRUDFunction,
    params: MongoSingleCRUDParams | MongoManyCRUDParams
}

//todo: look into creating indexes
export async function mongoConnectWrapper(args: MongoConnectionParams) {
    const {CRUDFunction, params} = args;

    //connects to the database
    const client = await MongoClient.connect((process.env.DB_URL as string), {useUnifiedTopology: true});

    const db = client.db();

    //calls the CRUD Function from the params object
    return CRUDFunction(db, params); //gets the result (if there is one)
}

export const insertOneWrapper: MongoCRUDFunction = async (db, otherArgs) => {
    const {collection, data, options} = otherArgs;
    try {
        //the shape of the data variable should be an Object
        const result = await db.collection(collection).insertOne(data, options);

        console.log(`Insert Completed successfully: ${result.result.ok}`);
    } catch (error) {
        console.log(`An error occurred: ${error}`);
    }
}

export const deleteOneWrapper: MongoCRUDFunction = async (db, otherArgs) => {
    const {collection, filter, options} = otherArgs;
    try {
        const result = await db.collection(collection).deleteOne(filter, options);

        console.log(`Delete completed successfully: ${result.result.ok}`);
    } catch (error) {
        console.log(`an error occurred: ${error}`)
    }
}

export const findOneAndUpdateWrapper: MongoCRUDFunction = async (db, otherArgs ) => {
    const {collection, filter, data, options} = otherArgs;
    try {
        const result = await db.collection(collection).findOneAndUpdate(filter, data, options);

        console.log(`update was successful for: ${result.value}`);
    } catch (error) {
        console.log(`there was an error: ${error}`);
    }
}

export const findOneWrapper: MongoCRUDFunction = async (db,otherArgs) => {
    const {collection, filter, options} = otherArgs;

    let result: Object[] = [];
    try {
        const temp = await db.collection(collection).findOne(filter, options);

        if (temp) {
            result = [temp];
        }

        // console.log(`you've found `)
        // const util = require('util')
        // console.log(util.inspect(result, {showHidden: false, depth: null}))
    } catch (error) {
        console.log(`error: ${error}`);
    }

    return result;
}

export const findWrapper: MongoCRUDFunction = async (db, otherArgs) => {
    const {collection, filter, options} = otherArgs;

    let result: Object[] = [];
    try {
        const temp = await db.collection(collection).find(filter, options).toArray();

        if (temp) {
            result = temp;
        }

        // console.log(`you've found `)
        // const util = require('util')
        // console.log(util.inspect(result, {showHidden: false, depth: null}))
    } catch (error) {
        console.log(`error: ${error}`);
    }

    return result;
}
