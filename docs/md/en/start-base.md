# Base

## Global Component Events

|name|parameter|description|
|---|------|---|
|ready |{BMap, map}|Triggers when Baidu Map is ready. It returns a core class of Baidu Map and a instance which is binding on the component `BaiduMap`. Please **DON'T** access the core class and the instance in lifecycle.|

## Global Component Instance Methods

|name|parameter|description|
|-----|---|---|
|load||An abstract method that is executed when a component will be load.|
|unload||An abstract method that is executed when a component will be unload.|
|reload||Excute the unload method, and then excute load method.|

## Constants

### ControlAnchor

The position of control components.

|name|description|
|----|----|
|BMAP_ANCHOR_TOP_LEFT|Position the control in the upper left corner.|
|BMAP_ANCHOR_TOP_RIGHT|Position the control in the upper right corner.|
|BMAP_ANCHOR_BOTTOM_LEFT|Position the control in the upper lower corner.|
|BMAP_ANCHOR_BOTTOM_RIGHT|Position the control in the lower right corner.|

### NavigationControlType

The type of navigation control components.

|name|description|
|----|----|
|BMAP_NAVIGATION_CONTROL_LARGE|Standard navigation control.|
|BMAP_NAVIGATION_CONTROL_SMALL|Navigation control with pan and zoom button.|
|BMAP_NAVIGATION_CONTROL_PAN|Navigation control with only pan button.|
|BMAP_NAVIGATION_CONTROL_ZOOM|Navigation control with only zoom button.|

### MapTypeControlType

The skin style of map type control components.

|name|description|
|----|----|
|BMAP_MAPTYPE_CONTROL_HORIZONTAL|Horizontal style.|
|BMAP_MAPTYPE_CONTROL_DROPDOWN|Dropdown style.|
|BMAP_MAPTYPE_CONTROL_MAP|Image style.|

### Animation

The animation of marker components.

|name|description|
|----|----|
|BMAP_ANIMATION_DROP|Drop animation.|
|BMAP_ANIMATION_BOUNCE|Bounce animation.|

### MapType

Types of Baidu Map.

|name|description|
|----|----|
|BMAP_NORMAL_MAP|Normal street view.|
|BMAP_PERSPECTIVE_MAP|Perspective image view.|
|BMAP_SATELLITE_MAP|Satellite view.|
|BMAP_HYBRID_MAP|Mixed view of the satellite and the road network.|

### LengthUnit

Length unit system

|name|description|
|----|----|
|BMAP_UNIT_METRIC|Metric units.|
|BMAP_UNIT_IMPERIAL|Imperial units.|

### HighlightModes

The current state of objects.

|name|description|
|----|----|
|BMAP_HIGHLIGHT_STEP|The step after clicking driving policy result.|
|BMAP_HIGHLIGHT_ROUTE|The route after clicking driving policy result.|

### TransitPolicy

The policy of transfer.

|name|description|
|----|----|
|BMAP_TRANSIT_POLICY_LEAST_TIME|Least time.|
|BMAP_TRANSIT_POLICY_LEAST_TRANSFER|Least distance.|
|BMAP_TRANSIT_POLICY_LEAST_WALKING|Least walking.|
|BMAP_TRANSIT_POLICY_AVOID_SUBWAYS|Avoid subways.|

### DrivingPolicy

The policy of driving

|name|description|
|----|----|
|BMAP_DRIVING_POLICY_LEAST_TIME|Least time.|
|BMAP_DRIVING_POLICY_LEAST_DISTANCE|Least distance.|
|BMAP_DRIVING_POLICY_AVOID_HIGHWAYS|Avoid highways.|


## Private Datatype

### Point

Describes the latitude and longitude of the map.

#### Structure

```javascript
{
  lng: Number
  lat: Number
}
```

### Size

Describes the length and width of the specified area on the map。

#### Structure

```javascript
{
  width: Number,
  height: Number
}
```

### Pixel

Describes the coordinates of a pixel on the map.

#### Structure

```javascript
{
  x: Number,
  y: Number
}
```

### Bounds

Describes a region of the map on the area surrounded by the southwest and northeast coordinates.

#### Structure

```javascript
{
  sw: Number,
  ne: Number
}
```

### Icon

Describes an icon.

#### Structure

```javascript
{
  url: String,
  size: Size,
  opts: {
    anchor: Size,
    imageOffset: Size,
    imageSize: Size,
    infoWindowAnchor: Size,
    printImageUrl: String
  }
}
```

### Label

Describes a label.

```javascript
{
  content: String,
  opts: {
    offset: Size
    position: Point,
    enableMassClear: Boolean
  }
}
```

### Copyright

Describes a copyright message.

```javascript
{
  id: Number,
  content String,
  bounds: Bounds
}
```

### PredictDate

Describes a predict date of traffic flow.

```javascript
{
  weekday: Number,
  hour: Number
}
```

### MapStyle

Describe a custom style of map.

```javascript
{
  features: Array,
  style: String
}
```

## Reference

> [Official Documentation](http://lbsyun.baidu.com/cms/jsapi/reference/jsapi_reference.html)
