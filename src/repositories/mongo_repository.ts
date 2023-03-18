import mongoose, { Schema, model } from 'mongoose'
import { Member } from '../entities/member/member'
import { Repository } from './repository'

export class MongoRepository implements Repository<Member> {

    constructor(private url: string){}


    private memberModel = model('Member', new Schema().loadClass(Member))

    private connectionToDatabase = async () => {
        await mongoose.connect(this.url)
    }

    public findAll = async (): Promise<Member[]> => {
        await this.connectionToDatabase()
        return this.memberModel.find({})
    }

    public save = async (member: Member): Promise<void> => {
        await this.connectionToDatabase()
        const newMember = new this.memberModel(member)
        newMember.save()
    }

    public deleteAll = async (): Promise<void> => {
        await this.memberModel.deleteMany({})
    }
}