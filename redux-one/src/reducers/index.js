import { combineReducers } from 'redux';
import { ADD_IDEA, UPVOTE_IDEA, DOWNVOTE_IDEA } from '../actions';

const ideaReducer = (ideas = [], action) => {
    switch (action.type) {
        case ADD_IDEA:
            return arrayFrom(ideas).push(action.payload); // Make a copy of the Ideas Array and add the new idea to it.
        case UPVOTE_IDEA:
            const index = action.payload.index; // Obtain the Idea's Index
            const idea = action.payload.idea; // Obtain the Idea
            const ideasCopy = arrayFrom(ideas); // Make a copy of the Ideas Array.
            ideasCopy[index] = idea; // Reassign the Idea with the new value
            return ideasCopy;
        case DOWNVOTE_IDEA:
            const index = action.payload.index; // Obtain the Idea's Index
            const idea = action.payload.idea; // Obtain the Idea
            const ideasCopy = arrayFrom(ideas); // Make a copy of the Ideas Array.
            ideasCopy[index] = idea; // Reassign the Idea with the new value
            return ideasCopy;
        default:
            return ideas;
    }
}

const rootReducer = combineReducers({
    ideas: ideaReducer
});

export default rootReducer;