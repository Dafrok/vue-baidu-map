import {createPoint} from './factory'

export const isPoint = obj => obj.lng && obj.lat
export const checkType = val => Object.prototype.toString.call(val).slice(8, -1)
export const toKebabCase = str => str.replace(/[A-Z]/g, letter => `-${letter.toLowerCase()}`).replace(/^-/, '')

export const getPosition = (BMap, point) => isPoint(point) ? createPoint(BMap, point) : point
