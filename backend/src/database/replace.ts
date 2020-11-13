import {Db, FilterQuery, MongoClient} from "mongodb";

export interface MongoSingleCRUDParams {
    collection: string,
    data: { [key: string]: any },
    filter: FilterQuery<any> //if no filter values are needed this can be {}
}

export interface MongoManyCRUDParams {
    collection: string,
    data: { [key: string]: any }[],
    filter: FilterQuery<any> //if no filter values are needed this can be {}
}

export type MongoCRUDFunction = (db: Db, otherArgs: MongoSingleCRUDParams | MongoManyCRUDParams) => Promise<void | Array<Object>>

export interface MongoConnectionParams {
    CRUDFunction: MongoCRUDFunction,
    params: MongoSingleCRUDParams | MongoManyCRUDParams
}

export const replaceOneWrapper: MongoCRUDFunction = async (db, otherArgs) => {
    const {filter, collection, data} = otherArgs;
    try {
        const result = await db.collection(collection).replaceOne(filter, data);

        console.log(`Replace completed successfully: ${result.result.ok}`);
    } catch (error) {
        console.log(`an error occurred: ${error}`)
    }
}