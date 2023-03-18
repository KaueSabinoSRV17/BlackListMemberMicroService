import { describe, it, expect } from 'vitest'
import { Member } from '../member'
import { GetAllMembers } from './get_all_members'
import { getBasicMember } from '../member.spec'
import { MongoRepository } from '../../../repositories/mongo_repository'
import axios from 'axios'

describe('Get All Members Use Case', async () => {

    const member = getBasicMember()
    const realRepository = new MongoRepository('mongodb://root:example@localhost:27017')

    const fakeRepository = {
        findAll(): Member[] {
            return [member]
        },
        save(member: Member) {
            return 
        }
    }
    const systemUnderTest = new GetAllMembers(fakeRepository)

    it('should get all members with fake implementation' , () => {
        const members = systemUnderTest.execute()
        
        expect(members).toBeTruthy()
        expect(members).resolves.toBeInstanceOf(Array<Member>)
    })

    it('should get all members with real implementation', async () => {
        await realRepository.save(member)
        const members = await realRepository.findAll()

        await realRepository.deleteAll()
        expect(members.length).toBeGreaterThan(0)
        expect(members.length).toEqual(1)
    })

    it('should give a valid http response querying from the database', async () => {
        const response = await axios.get('https://viacep.com.br/ws/01001000/json/')
        expect(response.status).toEqual(200)
    })

})