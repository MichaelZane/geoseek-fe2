export default {
    get: jest.fn(() => Promise.resolve({data: {
        title: 'test00',
        latitude: 37.754,
        longitude: -122.443

    }}))
}