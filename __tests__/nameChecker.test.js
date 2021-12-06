import { checkForName } from '../src/client/js/nameChecker'

describe('nameChecker module', () => {
    it ('function checkForName exists', () => {
        expect(checkForName).toBeDefined()
    })

    it ('checkForName returns true for all captain names', () => {
        const names = [
            "Picard",
            "Janeway",
            "Kirk",
            "Archer",
            "Georgiou"
        ]

        names.forEach(name => {
            expect(checkForName(name)).toBeTruthy()
        })
    })

    it ('checkForName returns false for all other names', () => {
        const names = [
            "Tyler",
            "John",
            "Sarah"
        ]

        names.forEach(name => {
            expect(checkForName(name)).toBeFalsy()
        })
    })
})
