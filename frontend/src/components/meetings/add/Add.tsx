import { useForm } from "react-hook-form";
import "./Add.css";
import MeetingsModel from "../../../models/meetings";
import groupsModel from "../../../models/groups";
import meetingsService from "../../../services/meetings";
import groupsService from "../../../services/groups";

import { useNavigate } from "react-router-dom";
import notify from "../../../services/Notify";
import { useEffect, useState } from "react";

function Add(): JSX.Element {

    const [groups, setgroups] = useState<groupsModel[]>([]);
    const { register, handleSubmit, formState } = useForm<MeetingsModel>();
    const navigate = useNavigate();

    useEffect(() => {
        groupsService.getAll()
            .then(setgroups)
            .catch(e => notify.error(e.message));
    }, []);

    async function addMeet(meet: MeetingsModel) {
        try {
            const addedMeet = await meetingsService.add(meet);
            notify.success(`added a new loremIpsum with id ${addedMeet.id}`);
        } catch (err) {
            notify.error(err);
        }
    }

    return (
        <div className="Add">
            <h2>Add meet</h2>
            <form onSubmit={handleSubmit(addMeet)}>

                <label>Meeting Start:</label>
                <input type="datetime-local" {...register('meetingStart',{
                   required: true, 
                })} />
                <div className="error">{formState.errors.meetingStart?.type}</div>
                <br></br>

                <label>Meeting End:</label>
                <input type="datetime-local" {...register("meetingEnd",{
                    required: true,
                })} />
                <div className="error">{formState.errors.meetingEnd?.type}</div>
                <br></br>

                <label>Description:</label>
                <input type="text"  {...register('description',{
                    required: true,
                    minLength: 2,
                    maxLength: 100,
                })} />
                <div className="error">{formState.errors.description?.type}</div>
                <br></br>

                <label>Meeting Room:</label>
                <input type="text"  {...register('meetingRoom', {
                     required: true,
                     minLength: 2,
                     maxLength: 100,
                })} />
                <div className="error">{formState.errors.meetingRoom?.type}</div>
                <br></br>

                
                <br></br>
                <select defaultValue='' {...register('groupsId')}>
                <option disabled value=''>please select groups</option>
                {groups.map(group => <option key={group.id} value={group.id}>{group.name}</option>)}
                </select>

                <br></br>
                <br></br>
                <br></br>

                <button>add</button>

            </form>
        </div>
    );
}

export default Add;
