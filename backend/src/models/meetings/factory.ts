import Model from "./model";
import meetings from "./mysql";

export default function getModel(): Model {
    return meetings;
}