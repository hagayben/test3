import Model from "./model";
import DTO from './dto';
import query from "../../db/mysql";

class Groups implements Model {

    public async getAll(): Promise<DTO[]> {
        const groups = await query(`
            SELECT   id,
                    name
            FROM    groups  
           
        `, );
        return groups;
    }
}

const groups = new Groups();
export default groups;