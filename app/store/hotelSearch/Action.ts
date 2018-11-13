import { extractActions } from "../../utils";
import * as actions from './actions'

type Action = extractActions<typeof actions>

export default Action