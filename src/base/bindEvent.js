import events from './events.js'
export default function (instance) {
  events[this.$options._componentTag].forEach(event => {
    instance.addEventListener(event, (arg) => {
      this.$emit(event, arg)
    })
  })
}
