// import {ObjectId} from "./index.js";

/**
 * Get the id from the request
 * @param id
 * @param res
 * @returns {*}
 */
export function getId(id, res) {
    if (id == null) {
        res.status(400);
        res.send(`Id manquant`);
    }
    // return new ObjectId(id);
    return id;
}