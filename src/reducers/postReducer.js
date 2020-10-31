var aa = [{
    Name: "Alex",
    Age : 15,
},
{
    Name: "Kate",
    Age : 18,
}]

const Paper = (state = aa, action) => {
    switch(action.type){
        case "ADD_POST":
            let obj1 = state[0];
            let obj2 = state[1];
            obj1.Age = obj1.Age + action.payload;
            obj2.Age = obj2.Age + action.payload;
            return [obj1, obj2];
        default:
            return state;
    }
}

export default Paper;