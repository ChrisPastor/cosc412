import {Db, FilterQuery, MongoClient} from "mongodb";

export interface MongoSingleCRUDParams {
    collection: string,
    data: {[key: string]: any},
    filter: FilterQuery<any> //if no filter values are needed this can be {}
}

export interface MongoManyCRUDParams {
    collection: string,
    data: {[key: string]: any} [],
    filter: FilterQuery<any> //if no filter values are needed this can be {}
}

export type MongoCRUDFunction = (db: Db, otherArgs: MongoSingleCRUDParams | MongoManyCRUDParams) => Promise<void | Array<Object>>

export interface MongoConnectionParams {
    CRUDFunction: MongoCRUDFunction,
    params: MongoSingleCRUDParams | MongoManyCRUDParams
}

export const insertManyWrapper: MongoCRUDFunction = async (db, otherArgs) => {
    const {collection, data} = otherArgs;
    try {
        if (typeof data !== "object") {    
            //the shape of the data variable should be an array of objects
            const result = await db.collection(collection).insertMany(data);

            console.log(`Insert Completed successfully: ${result.result.ok}`);
        } else {
            throw new Error(`Expected array of objects, got '${data}'.`);
        }
    } catch (error) {
        console.log(`An error occurred: ${error}`);

    }
}