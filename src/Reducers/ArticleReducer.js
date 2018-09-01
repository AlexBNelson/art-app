export default (state = 0, action) => {
    switch (action.type) {
        case 'ARTICLEIMAGE1':
            return state + 1
        case 'ARTICLEIMAGE2':
            return state - 1
        default:
            return state
    }
}
