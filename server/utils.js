// import {ObjectId} from "./index.js";

export function getId(id, res) {
    if (id == null) {
        res.status(400);
        res.send(`Id manquant`);
    }
    // return new ObjectId(id);
    return id;
}

export function compareFieldValues(list1, list2) {
    // Check if the lists have the same length
    if (list1.length !== list2.length) {
        return false;
    }

    // Iterate over the elements of both lists and compare the field values
    for (let i = 0; i < list1.length; i++) {
        if (list1[i] !== list2[i][field]) {
            return false;
        }
    }

    // All field values are equal
    return true;
}