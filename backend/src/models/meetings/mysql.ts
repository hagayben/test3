import Model from "./model";
import DTO from './dto';
import query from "../../db/mysql";
import { OkPacketParams } from "mysql2";

class Meetings implements Model {

    public async getByGroups(groupsId: number): Promise<DTO[]> {
        const meetings = await query(`
            SELECT   meetings.id,
            groupsId,
            groups.name AS groupName,
            meetingStart,
            meetingEnd,
            description,
            meetingRoom
            FROM    meetings
            LEFT JOIN groups ON meetings.groupsId = groups.id
            WHERE groupsId = ?
           
        `,[groupsId] );
        return meetings;
    }

    public async getOne(id: number): Promise<DTO> {
        const meet = await query(`
            SELECT   id,
            groupsId,
            meetingStart,
            meetingEnd,
            description,
            meetingRoom
            FROM    meetings
            WHERE id = ?
           
        `,[id] );
        return meet;
    }

    public async add(meet: DTO): Promise<DTO> {
        const { groupsId, meetingStart, meetingEnd, description, meetingRoom} = meet
        const result:OkPacketParams = await query(`
        INSERT INTO meetings(
            groupsId,
            meetingStart,
            meetingEnd,
            description,
            meetingRoom)
             VALUES (?,?,?,?,?)
           
        `,
        [groupsId, meetingStart, meetingEnd, description, meetingRoom] );
        return this.getOne(result.insertId)
    }


}

const meetings = new Meetings();
export default meetings;