/**
# pixel.js
*/

export const render = (color = 'rgba(255,255,255,0.3)') => {
  const c = document.createElement('canvas')
  c.width = 1
  c.height = 1
  const g = c.getContext('2d')
  g.fillStyle = color
  g.fillRect(0, 0, 1, 1)
  return c.toDataURL()
}
