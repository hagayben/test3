import { useEffect, useState } from "react";
import "./meetings.css";
import meetingsService from "../../../services/meetings";
import groupsService from "../../../services/groups";
import notify from "../../../services/Notify";
import MeetingsModel from "../../../models/meetings";
import groupsModel from "../../../models/groups";

function Meetings(): JSX.Element {

    const [meetings, setmeetings] = useState<MeetingsModel[]>([]);
    const [groups, setgroups] = useState<groupsModel[]>([]);
    const [selectGroups, setselectGroupsId] = useState<number | null>(null);

    useEffect(() => {
        groupsService.getAll()
            .then(setgroups)
            .catch(e => notify.error(e.message));
    }, []);

    const getMeetings = async (selectGroups: number | null) => {
        if (selectGroups === null) {
            return
        }
        meetingsService.getByGroups(selectGroups)
            .then(setmeetings)
            .catch(e => notify.error(e.message))
    }

    useEffect(() => {
        getMeetings(selectGroups)

    }, [selectGroups])

    return (
        <div className="meetings">
            <select defaultValue='' onChange={(e) => {
                setselectGroupsId(Number(e.target.value));

            }}>
                <option disabled value=''>please select groups</option>
                {groups.map(group => <option key={group.id} value={group.id}>{group.name}</option>)}
            </select>
            <br />
            <br />

            <table>
                <thead>
                    <tr>

                        <th>groups Name</th>
                        <th>meeting Start</th>
                        <th>meeting End</th>
                        <th>description</th>
                        <th>meeting Room</th>
                    </tr>
                </thead>
                <tbody>
                    {meetings.map(meet => <tr key={meet.id}>
                        <td>{meet.groupName}</td>
                        <td>{meet.meetingStart}</td>
                        <td>{meet.meetingEnd}</td>
                        <td>{meet.description}</td>
                        <td>{meet.meetingRoom}</td>
                    </tr>)}
                </tbody>
            </table>
        </div>


    );
}

export default Meetings;
