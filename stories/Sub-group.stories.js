let processData = (data) => {
  const clip = (d) => {
    return d / 3000
  }
  let pointList = data.nodes
      .map((d, idx) => {
        return [clip(d.x), clip(d.y), d.uuid || d.id]
      })
  data.pointList = pointList

  let points = {}
  data.nodes.forEach(d => points[d.uuid || d.id] = d)

  let getNode = (id) => {
    return points[id]
  }

 let colors = data.nodes.map(d => {
   return [Math.random(), ]
 })

  let position = _.flatten(data.nodes.map(d => [clip(d.x), clip(d.y)]))
  var accent = d3.scaleOrdinal(d3.schemeAccent);

  let sentimentValue = _.flatten(data.nodes.map((d) => {
    let c = d3.rgb(d3.interpolateSpectral(+ d.attributes ? d.attributes.SentimentVal : Math.random()));
    return [c.r /255 , c.g /255 , c.b /255];
  }));

  let counts = {}
  data.edges.forEach(d => {
    counts[d.target] = counts[d.target]
  })

    let edges = new Array(data.edges.length * 4).fill(0);
    data.edges.forEach((edge, idx) => {
      let source = getNode(edge.source), target = getNode(edge.target);
      //if( ! source || ! target ) debugger
      edges[idx*4] = clip(source.x)
      edges[idx*4+1] = clip(source.y)
      edges[idx*4+2] = clip(target.x)
      edges[idx*4+3] = clip(target.y)
    });

    let edgeColors = new Array(data.edges.length * 3).fill(0);
    if (data.kmeans) {
      let x = Object.entries(data.kmeans)
      x.map(tup => {
        let {color, nodes} = tup[1]
        nodes.forEach(id => getNode(id).color = color)

      })
    }

      data.edges.forEach((edge, idx) => {
        //console.log(`%c ${edge.target}`, 'background: green;');
        let color = (data.nodes[edge.source] ? data.nodes[edge.source] : getNode(edge.target)).color
        let c = d3.rgb(color);
        edgeColors[idx*3] = c.r / 255
        edgeColors[idx*3+1] = c.g / 255
        edgeColors[idx*3+2] = c.b / 255
    });

    let dates = data.nodes.map((d, idx) => {
      return d.create_time || (Math.random() * new Date());
    })
    let color = _.flatten(data.nodes.map((d) => {
      let c = d3.color(d.color || 'pink');
      return [c.r /255 , c.g /255 , c.b /255];
    }));

    let legend = Object.entries(data.kmeans || {}).map(d => d[1].color);

    let stateIndex = _.flatten(data.nodes.map((d) => {
      let c = d.color
      return legend.indexOf(c);
    }));


    return {
      position,
      counts,
      edges,
      edgeColors,
      color,
      dates,
      sentimentValue,
      stateIndex,
      pointList

  }
}