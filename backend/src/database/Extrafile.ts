

export const updateManyWrappers: MongoCRUDFunction = async (db, otherArgs ) => {
    const {collection, filter, data} = otherArgs;
    try {
        if (typeof data !== "object") {
            const result = await db.collection(collection).updateMany(filter, data);
            
            console.log(`update was successful for: ${result.value}`);
        } else {
            throw new Error(`Expected array of objects, got ${data}`);
        }
    } catch (error) {
        console.log(`there was an error: ${error}`);
    }

}
export const updateOneWrapper: MongoCRUDFunction = async (db, otherArgs ) => {
    const {collection, filter, data} = otherArgs;
    try {
        const result = await db.collection(collection).updateOne(filter, data);

        console.log(`replacement was successful for: ${result.value}`);
    } catch (error) {
        console.log(`there was an error: ${error}`);
    }
}