pathgl.shader = shader

function shader() {
  var dependents = []
    , target = null
    , blockSize
    , render
    , stepRate = 2

  var self = {
      read: read
    , map: map
    , match: matchWith
    , pipe: pipe
    , invalidate: function () {
        tasksOnce.push(step)
        dependents.forEach(function (d) {
          d.invalidate()
        })
      }
  }

  var ctx = RenderTarget({
    fbo: gl.createFramebuffer()
  , program: createProgram(gl, simulation_vs, particleShader)
  , gl: gl
  , mesh: Mesh(gl, { pos: { array: Quad(), size: 2 }
                   , attrList: ['pos']
                   , count: 4
                   , primitive: 'triangle_strip'
                   })
  })

  function step() {
    for(var i = -1; ++i < stepRate;) ctx.update()
  }

  return self

  function read(tex) {
    ctx.drawTo(tex)
  }

  function map (shader) {
    ctx.mergeProgram(simulation_vs, particleShader)
    // render = new meow(
    //   createProgram(gl, simulation_vs, shader),
    //   {})
    return this
  }


  function draw () {
  }

  function matchWith() {
    return this
  }

  function pipe (ctx) {
    dependents.push(ctx)
    return self
  }
}
