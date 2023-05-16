// import {ObjectId} from "./index.js";

export function getId(id, res) {
    if (id == null) {
        res.status(400);
        res.send(`Id manquant`);
    }
    // return new ObjectId(id);
    return id;
}

