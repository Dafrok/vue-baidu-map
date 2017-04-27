class Mixin {
  constructor ({component, props, events, extraProps, exceptProps}) {
    this.render = function (h) {
      return h(component, {
        props: props.reduce((obj, key) => Object.assign(obj, {[key]: this[key]}), {}),
        on: events.reduce((obj, key) => Object.assign(obj, {[key]: this.transmitEvent}), {})
      })
    }
    this.props = [...extraProps, ...props.filter(prop => exceptProps.indexOf(prop))]
  }
}

export default prop => new Mixin(prop)
