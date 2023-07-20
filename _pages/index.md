---
layout: page
title: Home
id: home
permalink: /
---
<style>
  /* Add your CSS styles here */
</style>

<div id="graph-wrapper">
  <script>
    window.addEventListener("load", loadGraph);

    function loadGraph() {
      var oScript = document.createElement("script");
      oScript.src = "https://cdnjs.cloudflare.com/ajax/libs/d3/5.16.0/d3.min.js";
      oScript.crossOrigin = 'anonymous';
      oScript.integrity =
        "sha512-FHsFVKQ/T1KWJDGSbrUhTJyS1ph3eRrxI228ND0EGaEp6v4a/vGwPWd3Dtd/+9cI7ccofZvl/wulICEurHN1pg==";
      document.body.appendChild(oScript);
      oScript.onload = () => {
        const MINIMAL_NODE_SIZE = 8;
        const MAX_NODE_SIZE = 12;
        const ACTIVE_RADIUS_FACTOR = 1.5;
        const STROKE = 1;
        const FONT_SIZE = 16;
        const TICKS = 200;
        const FONT_BASELINE = 40;
        const MAX_LABEL_LENGTH = 50;

        const graphData = {% include notes_graph.json %}
        let nodesData = graphData.nodes;
        let linksData = graphData.edges;

        const nodeSize = {};

        const updateNodeSize = () => {
          nodesData.forEach((el) => {
            let weight =
              3 *
              Math.sqrt(
                linksData.filter((l) => l.source.id === el.id || l.target.id === el.id)
                  .length + 1
              );
            if (weight < MINIMAL_NODE_SIZE) {
              weight = MINIMAL_NODE_SIZE;
            } else if (weight > MAX_NODE_SIZE) {
              weight = MAX_NODE_SIZE;
            }
            nodeSize[el.id] = weight;
          });
        };

        const onClick = (d) => {
          window.location = d.path
        };

        const onMouseover = function (d) {
          // ...
        };

        const onMouseout = function (d) {
          // ...
        };

        // ... (sameNodes and sameEdges functions)

        const graphWrapper = document.getElementById('graph-wrapper')
        const element = document.createElementNS("http://www.w3.org/2000/svg", "svg");
        element.setAttribute("width", graphWrapper.getBoundingClientRect().width);
        element.setAttribute("height", window.innerHeight * 0.8);
        graphWrapper.appendChild(element);

        const reportWindowSize = () => {
          // ...
        };

        window.onresize = reportWindowSize;

        const svg = d3.select("svg");
        const width = Number(svg.attr("width"));
        const height = Number(svg.attr("height"));
        let zoomLevel = 1;

        const simulation = d3
          .forceSimulation(nodesData)
          .force("forceX", d3.forceX().x(width / 2))
          .force("forceY", d3.forceY().y(height / 2))
          .force("charge", d3.forceManyBody())
          .force(
            "link",
            d3
              .forceLink(linksData)
              .id((d) => d.id)
              .distance(70)
          )
          .force("center", d3.forceCenter(width / 2, height / 2))
          .force("collision", d3.forceCollide().radius(80))
          .stop();

        const g = svg.append("g");
        let link = g.append("g").attr("class", "links").selectAll(".link");
        let node = g.append("g").attr("class", "nodes").selectAll(".node");
        let text = g
          .append("g")
          .attr("class", "text")
          .selectAll(".text")
          .data(nodesData)
          .enter()
          .append("foreignObject")
          .attr("width", (d) => nodeSize[d.id] * 2)
          .attr("height", (d) => nodeSize[d.id] * 2)
          .html((d) => `<div>${shorten(d.label.replace(/_*/g, ""), MAX_LABEL_LENGTH)}</div>`)
          .attr("x", (d) => d.x - nodeSize[d.id])
          .attr("y", (d) => d.y - nodeSize[d.id]);

        const resize = () => {
          // ...
        };

        const ticked = () => {
          // ...
        };

        const restart = () => {
          updateNodeSize();
          node = node.data(nodesData, (d) => d.id);
          node.exit().remove();
          node = node
            .enter()
            .append("circle")
            .attr("r", (d) => {
              return nodeSize[d.id];
            })
            .on("click", onClick)
            .on("mouseover", onMouseover)
            .on("mouseout", onMouseout)
            .merge(node);

          link = link.data(linksData, (d) => `${d.source.id}-${d.target.id}`);
          link.exit().remove();
          link = link.enter().append("line").attr("stroke-width", STROKE).merge(link);

          text = text.data(nodesData, (d) => d.label);
          text.exit().remove();
          text = text
            .enter()
            .append("foreignObject")
            .attr("width", (d) => nodeSize[d.id] * 2)
            .attr("height", (d) => nodeSize[d.id] * 2)
            .html((d) => `<div>${shorten(d.label.replace(/_*/g, ""), MAX_LABEL_LENGTH)}</div>`)
            .attr("x", (d) => d.x - nodeSize[d.id])
            .attr("y", (d) => d.y - nodeSize[d.id])
            .merge(text);

          // ...
        };

        // ...

        zoomHandler(svg);
        restart();

        function isCurrentPath(notePath) {
          return window.location.pathname.includes(notePath)
        }

        function shorten(str, maxLen, separator = ' ') {
          if (str.length <= maxLen) return str;
          return str.substr(0, str.lastIndexOf(separator, maxLen)) + '...';
        }
      }
    }
  </script>
</div>

<ul>
  {% assign recent_notes = site.notes | sort: "last_modified_at_timestamp" | reverse %}
  {% for note in recent_notes limit: 5 %}
    <li>
      {{ note.last_modified_at | date: "%Y-%m-%d" }} — <a class="internal-link" href="{{ note.url }}">{{ note.title }}</a>
    </li>
  {% endfor %}
</ul>

<style>
  .wrapper {
    max-width: 46em;
  }
</style>
