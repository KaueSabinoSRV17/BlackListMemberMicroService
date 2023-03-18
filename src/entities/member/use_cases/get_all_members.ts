import { Repository } from "../../../repositories/repository";
import { Member } from "../member";

export class GetAllMembers {

    constructor(
        private repository: Repository<Member>
    ){}

    async execute() {
        return this.repository.findAll()
    }
}
