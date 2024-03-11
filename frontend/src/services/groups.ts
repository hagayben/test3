import axios from "axios";
import groupsModel from "../models/meetings";
import appConfig from "../utils/AppConfig";

class Groups {
  public async getAll(): Promise<groupsModel[]> {
    const response = await axios.get<groupsModel[]>(
      appConfig.groupsUrl
    );

    const groups = response.data;

    return groups;
  }

 
}

// singleton
const groups = new Groups();
export default groups;
