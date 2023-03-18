import { expect, describe, it } from 'vitest'
import { Instrument, Member } from './member'

describe('Member', () => {

    const name = 'Kauê Sabino'
    const instrument = Instrument.ELETRIC_GUITAR
    const birthDate = new Date(2003, 7, 17)
    const socialLinks = ['likedin']
    const bio = 'A Devops Developer'
    const email = 'kauevillaca2018@gmail.com'

    it('should have all the properites populated', () => {
        
        const member = getBasicMember()

        expect(member).toBeInstanceOf(Member)

        Object.keys(member).forEach((prop, index) => {
            const values = Object.values(member)
            expect(member[prop] === values[index]).toBe(true)
        })

    })

    it('should be false if the member does not have a valid social link', () => {
        const invalidSocialLinkList = ['no media at all']
        const socialLinkListIsValid = Member.validateSocialLinkList(invalidSocialLinkList)
        expect(socialLinkListIsValid).toBe(false)
    })

    it('should be true if the member does have a valid social link', () => {
        const validSocialLinkList = ['https://www.linkedin.com/in/kaue-villa%C3%A7a-de-almeida/']
        const socialLinkListIsValid = Member.validateSocialLinkList(validSocialLinkList)
        expect(socialLinkListIsValid).toBe(true)
    })

})

export function getBasicMember() {
    const name = 'Kauê Sabino'
    const instrument = Instrument.ELETRIC_GUITAR
    const birthDate = new Date(2003, 7, 17)
    const socialLinks = ['likedin']
    const bio = 'A Devops Developer'
    const email = 'kauevillaca2018@gmail.com'

    return new Member(
        name,
        instrument,
        birthDate,
        socialLinks,
        bio,
        email 
    )
}