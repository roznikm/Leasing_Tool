export default (state, action) => {
    switch(action.type) {
        case 'GET_LEASES':
            return {
                ...state,
                loading: false.payload,
                leases: action.payload
            };
        case 'DELETE_LEASE':
            return {
                ...state,
                leases: state.leases.filter(transaction => transaction._id !== action.payload)
            };
        case 'SELECT_ID':
            return {
                ...state,
                selected_id: action.payload
            };
        case 'ADD_LEASE':
            return {
                ...state,
                leases: [...state.leases, action.payload]
            };
        case 'LEASE_ERROR':
            return {
                ...state,
                error: action.payload
            };    
        default:
            return state
    }
};