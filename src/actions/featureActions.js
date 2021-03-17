export const ADD_FEATURES = "ADD_FEATURES";
export const addFeatures = (addedFeatures) => {
    return { type:ADD_FEATURES, payload: addedFeatures }
}
export const REMOVE_FEATURES = "REMOVE_FEATURES";
export const removeFeatures = (removedFeatures) => {
    return { type:REMOVE_FEATURES, payload: removedFeatures }
}