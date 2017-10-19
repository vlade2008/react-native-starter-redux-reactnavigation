/**
* Created by albertoclarit on 3/28/17.
*/
import MainNavigation from '../navigation/MainNavigation'

export default mainnavreducers = (state, action) => {
    const newState = MainNavigation.router.getStateForAction(action, state);
    return newState || state;
};
