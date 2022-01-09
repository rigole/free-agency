import { formatJobList } from './index'

describe('La fonction format', () => {
    test("ajoute une virgule a un item", () => {
        const expectedState = 'item2,'
        expect(formatJobList('item2', 3, 1)).toEqual(expectedState)
    })
    test('ne mets pas de virgule pour le dernier element', () => {
        const expectedState = 'item3'
        expect(formatJobList('item3', 3, 2)).toEqual(expectedState)
    })

})