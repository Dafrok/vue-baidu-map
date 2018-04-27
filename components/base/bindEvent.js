import events from './events.js'
import {toKebabCase} from './util.js'

export default function (instance, eventList) {
  const ev = eventList || events[toKebabCase(this.$options._componentTag)]
  ev && ev.forEach(event => {
    const hasOn = event.slice(0, 2) === 'on'
    const eventName = hasOn ? event.slice(2) : event
    const listener = this.$listeners[eventName]
    listener && instance.addEventListener(event, listener.fns)
  })
}
