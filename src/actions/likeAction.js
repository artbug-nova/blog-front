const addLike = () =>({
    type: "ADD_LIKE"
})

const addPost = (param) => ({
    type: "ADD_POST", payload : param
});

export {addLike, addPost};