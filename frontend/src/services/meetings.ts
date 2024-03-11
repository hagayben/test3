import axios from "axios";
import meetingsModel from "../models/meetings";
import appConfig from "../utils/AppConfig";

class Meetings {
  public async getByGroups(groupsId: number): Promise<meetingsModel[]> {
    const response = await axios.get<meetingsModel[]>(
      `${appConfig.meetingsUrl}/${groupsId}`
    );

    const meetings = response.data;

    return meetings;
  }

  public async add(meet: meetingsModel): Promise<meetingsModel> {
    const response = await axios.post<meetingsModel>(
      appConfig.meetingsUrl,
      meet
    );

    const addedMeet = response.data;

    return addedMeet;
  }
}

// singleton
const meetings = new Meetings();
export default meetings;
