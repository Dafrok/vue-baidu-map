export type ControlAnchor = 
'BMAP_ANCHOR_TOP_LEFT' 
| 'BMAP_ANCHOR_TOP_RIGHT'
| 'BMAP_ANCHOR_BOTTOM_LEFT'
| 'BMAP_ANCHOR_BOTTOM_RIGHT'

export type Size = { width: number, height: number }

export declare class Scale {
anchor: ControlAnchor
offset: Size
}