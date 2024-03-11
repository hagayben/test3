import DTO from './dto';

export default interface Model {
    getByGroups(groupsId:number): Promise<DTO[]>;
    add(meet: DTO): Promise<DTO>;
}