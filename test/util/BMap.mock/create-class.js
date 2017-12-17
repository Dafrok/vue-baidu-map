import spy from './spy.js'

export default function (instanceFunctions) {
  function NewClass () {}
  instanceFunctions.forEach(name => {
    NewClass.prototype[name] = spy
  })
  return NewClass
}
