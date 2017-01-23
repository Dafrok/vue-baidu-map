export function createPoint(BMap, options) {
  const {lng, lat} = options
  return new BMap.Point(lng, lat)
}

export function createPixel(BMap, options) {
  const {x, y} = options
  return new BMap.Pixel(x, y)
}

export function createBounds(BMap, options) {
  const {sw, ne} = options
  return new BMap.Bounds(sw, ne)
}

export function createSize(BMap, options) {
  const {width, height} = options
  return new BMap.Size(width, height)
}

export function createIcon(BMap, options) {
  const {url, size, opts} = options
  return new BMap.Icon(url, createSize(size), {
    anchro: createSize(opts.anchor),
    imageOffset: createSize(opts.imageOffset),
    infoWindowAnchor: createSize(opts.infoWindowAnchor),
    printImageUrl
  })
}

export function createLabel (BMap, options) {
  const {content, opts} = options
  return new BMap.Label(content, {
    offset: createSize(opts.offset),
    position: createPoint(opts.position),
    enableMassClear: opts.enableMassClear
  })
}