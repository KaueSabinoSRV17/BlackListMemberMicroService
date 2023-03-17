export class Member {

    public static validateSocialLinkList = (socialLinkList: string[]): boolean => {

        const VALID_SOCIAL_MEDIA = [
            'facebook',
            'instagram',
            'linkedin',
            'youtube'
        ]

        return socialLinkList.some(link => {
            return VALID_SOCIAL_MEDIA.some(validMedia => link.includes(validMedia))
        })
    }

    constructor(
        public name: string,
        public instrument: Instrument,
        public birthDate: Date,
        public socialLinks: string[],
        public bio: string,
        public email: string
    ){}
}

export enum Instrument {
    ELETRIC_GUITAR,
    BASS_GUITAR,
    ACOUSTIC_GUITAR,
    DRUMS,
    SINGER
}