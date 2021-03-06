export const COLOR_ACTIVE_IDX = 1
export const COLOR_BG_IDX = 3
export const COLOR_HOVER_IDX = 2
export const COLOR_NORMAL_IDX = 0
export const COLOR_NUM_STATES = 4
export const FLOAT_BYTES = Float32Array.BYTES_PER_ELEMENT
export const GL_EXTENSIONS = [ 'ANGLE_instanced_arrays', 'OES_standard_derivatives']

// Default attribute
export const DEFAULT_DATA_ASPECT_RATIO = 1
export const DEFAULT_WIDTH = window.innerWidth
export const DEFAULT_HEIGHT = window.innerHeight

// Default styles
export const DEFAULT_POINT_SIZE = 30
export const DEFAULT_POINT_SIZE_SELECTED = 2
export const DEFAULT_POINT_OUTLINE_WIDTH = 2

// Default colors
export const DEFAULT_COLORMAP = []
export const DEFAULT_COLOR_BY = null
export const DEFAULT_COLOR_NORMAL = [1, 0.66, 0.66, 1]
export const DEFAULT_COLOR_ACTIVE = [0, 0.55, 1, 1]
export const DEFAULT_COLOR_HOVER = [0, 1, 1, 1]
export const DEFAULT_COLOR_BG = [0, 0, 0, 1]
export const DEFAULT_COLORS = [
  DEFAULT_COLOR_NORMAL,
  DEFAULT_COLOR_ACTIVE,
  DEFAULT_COLOR_HOVER,
  DEFAULT_COLOR_BG
]


// Default view
export const DEFAULT_TARGET = [0, 0]
export const DEFAULT_DISTANCE = 100000.5
export const DEFAULT_ROTATION = 0
// prettier-ignore

// export const // DEBUG: FAULT_VIEW =
//
//
// new //Float32Array([5.554607391357422, 0, 0, 0, 0, 5.554607391357422, 0, 0, 0, 0, 1, 0, -0.527761697769165, 0.8586031794548035, 0, 1])
export const DEFAULT_VIEW =
[
  0.005619607400149107,
  0,
  0,
  0,
  0,
  0.005619607400149107,
  0,
  0,
  0,
  0,
  1,
  0,
  -0.10438694804906845,
  -0.21595391631126404,
  0,
  1
]

// [
//   0.03113524243235588,
//   0,
//   0,
//   0,
//   0,
//   0.03113524243235588,
//   0,
//   0,
//   0,
//   0,
//   1,
//   0,
//   -0.010425571352243423,
//   -0.26117563247680664,
//   0,
//   1
// ]

// Default misc
export const DEFAULT_BACKGROUND_IMAGE = null
export const DEFAULT_SHOW_RECTICLE = true
export const DEFAULT_RECTICLE_COLOR = [1, 1, 1, 0.5]
