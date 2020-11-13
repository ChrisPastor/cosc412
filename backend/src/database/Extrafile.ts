

export const updateManyWrappers: MongoCRUDFunction = async (db, otherArgs ) => {
    const {collection, filter, data} = otherArgs;
    try {
        const result = await db.collection(collection).updateMany(filter,data);

        console.log(`update was successful for: ${result.value}`);
    } catch (error) {
        console.log(`there was an error: ${error}`);
    }
}
export const replaceOneWrapper: MongoCRUDFunction = async (db, otherArgs ) => {
    const {collection, filter, data} = otherArgs;
    try {
        const result = await db.collection(collection).replaceOne(filter,data);

        console.log(`replacement was successful for: ${result.value}`);
    } catch (error) {
        console.log(`there was an error: ${error}`);
    }
}