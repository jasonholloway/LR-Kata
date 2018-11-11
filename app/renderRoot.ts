import { render } from 'react-dom'
import createApp from './createApp'

const { element } = createApp();

render(element, document.getElementById('root'));
