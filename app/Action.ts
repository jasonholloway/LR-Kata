import * as actionCreators from './actions'
import { extractActions } from './utils';

export type Action = extractActions<typeof actionCreators>
