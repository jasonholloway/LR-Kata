import { hydrate } from 'react-dom'
import createApp from './createApp'

const preState = (window as any).__PRELOADED_STATE__;

const { element } = createApp(preState);

hydrate(element, document.getElementById('root'));
