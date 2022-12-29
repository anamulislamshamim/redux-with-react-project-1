const { createStore } = require("redux");
const { counterReducer } = require("./services/reducers/counterReducer");


const store = createStore(counterReducer);

export default store;