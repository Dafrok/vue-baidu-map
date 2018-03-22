import events from './events.js'
import {toKebabCase} from './util.js'

export default function (instance, eventList) {
  const ev = eventList || events[toKebabCase(this.$options._componentTag)]
  ev && ev.forEach(event => {
    const hasOn = event.slice(0, 2) === 'on'
    instance.addEventListener(event, (arg) => {
      this.$emit(hasOn ? event.slice(2) : event, arg)
    })
  })
}
