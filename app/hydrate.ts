import { hydrate } from 'react-dom'
import createApp from './createApp'

const { element } = createApp();

hydrate(element, document.getElementById('root'));
