import { Middleware } from "redux";
import * as actions from './actions'


const searcher: Middleware = ({dispatch}) => next => action => {
    next(action);
};

// api.get('/hotels/search')
// .then(res => dispatch({ type: 'SEARCH_RESULT', res }))
// .catch(er => dispatch({ type: 'SEARCH_ERROR' }));


export default searcher;
