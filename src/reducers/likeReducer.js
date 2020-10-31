const likeDefault = {
    likeName: "lukas",
}

const likefunc = (state = likeDefault, action) =>{
    switch (action.type) {
        case "ADD_LIKE":
            return {likeName: "ukus"};
        default:
            return state;
    }
}

export default likefunc;