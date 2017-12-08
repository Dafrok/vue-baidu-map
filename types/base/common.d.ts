
export type ControlAnchor = 
  'BMAP_ANCHOR_TOP_LEFT' 
  | 'BMAP_ANCHOR_TOP_RIGHT'
  | 'BMAP_ANCHOR_BOTTOM_LEFT'
  | 'BMAP_ANCHOR_BOTTOM_RIGHT'

export type MapType = 
  'BMAP_NORMAL_MAP' 
  | 'BMAP_PERSPECTIVE_MAP'
  | 'BMAP_SATELLITE_MAP'
  | 'BMAP_HYBRID_MAP'

export type NavigationControlType = 
  'BMAP_NAVIGATION_CONTROL_LARGE'
  | 'BMAP_NAVIGATION_CONTROL_SMALL'
  | 'BMAP_NAVIGATION_CONTROL_PAN'
  | 'BMAP_NAVIGATION_CONTROL_ZOOM'

export type Size = { width: number, height: number }

export type Point = { lng: number, lat: number }

export interface IconOptions {
  anchor: Size
  imageOffset: Size
  imageSize: Size
  infoWindowAnchor: Size
  printImageUrl: string
}

export interface Icon {
  url: string
  size: Size,
  opts: IconOptions
}