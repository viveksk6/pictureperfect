import { MOVIES } from "../constants";

const pageReducer = (state = 1, action) => {
  switch (action.type) {
    case MOVIES.LOAD_SUCCESS:
      console.log(action.pageNumber);
      return action.pageNumber;
    default:
      return state;
  }
};

export default pageReducer;
