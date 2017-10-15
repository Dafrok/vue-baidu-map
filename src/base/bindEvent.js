import events from './events.js'
export default function (instance, eventList) {
  (eventList || events[this.$options._componentTag]).forEach(event => {
    const hasOn = event.slice(0, 2) === 'on'
    instance.addEventListener(event, (arg) => {
      this.$emit(hasOn ? event.slice(2) : event, arg)
    })
  })
}
