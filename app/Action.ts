import { extractActions } from './utils';
import * as hotelSearchActions from './modules/hotelSearch/actions'

type Action = extractActions<
                    | typeof hotelSearchActions
                    >

export default Action;
