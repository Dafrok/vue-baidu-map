export function createPoint (BMap, options = {}) {
  const {lng, lat} = options
  return new BMap.Point(lng, lat)
}

export function createPixel (BMap, options = {}) {
  const {x, y} = options
  return new BMap.Pixel(x, y)
}

export function createBounds (BMap, options = {}) {
  const {sw, ne} = options
  return new BMap.Bounds(createPoint(BMap, sw), createPoint(BMap, ne))
}

export function createSize (BMap, options = {}) {
  const {width, height} = options
  return new BMap.Size(width, height)
}

export function createIcon (BMap, options = {}) {
  const {url, size, opts = {}} = options
  return new BMap.Icon(url, createSize(BMap, size), {
    anchor: opts.anchor && createSize(BMap, opts.anchor),
    imageSize: opts.imageSize && createSize(BMap, opts.imageSize),
    imageOffset: opts.imageOffset && createSize(BMap, opts.imageOffset),
    infoWindowAnchor: opts.infoWindowAnchor && createSize(BMap, opts.infoWindowAnchor),
    printImageUrl: opts.printImageUrl
  })
}

export function createLabel (BMap, options = {}) {
  const {content, opts} = options
  return new BMap.Label(content, {
    offset: opts.offset && createSize(BMap, opts.offset),
    position: opts.position && createPoint(BMap, opts.position),
    enableMassClear: opts.enableMassClear
  })
}
