---
layout: page
title: Home
id: home
permalink: /
---
<style>
  .links line {
    stroke: #ccc;
    opacity: 0.5;
  }

  .nodes circle {
    cursor: pointer;
    fill: #8b88e6;
    transition: all 0.15s ease-out;
  }

  .text text {
    cursor: pointer;
    fill: #333;
    text-shadow: -1px -1px 0 #fafafabb, 1px -1px 0 #fafafabb, -1px 1px 0 #fafafabb, 1px 1px 0 #fafafabb;
  }

  .nodes [active],
  .text [active] {
    cursor: pointer;
    fill: black;
  }

  .inactive {
    opacity: 0.1;
    transition: all 0.15s ease-out;
  }

  #graph-wrapper {
    background: #fcfcfc;
    border-radius: 4px;
    height: auto;
  }

  #graph-wrapper > svg {
    max-width: 100%;
    display: block;
  }
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
          const relatedNodesSet = new Set();
          linksData
            .filter((n) => n.target.id == d.id || n.source.id == d.id)
            .forEach((n) => {
              relatedNodesSet.add(n.target.id);
              relatedNodesSet.add(n.source.id);
            });

          node.attr("class", (node_d) => {
            if (node_d.id !== d.id && !relatedNodesSet.has(node_d.id)) {
              return "inactive";
            }
            return "";
          });

          link.attr("class", (link_d) => {
            if (link_d.source.id !== d.id && link_d.target.id !== d.id) {
              return "inactive";
            }
            return "";
          });

          link.attr("stroke-width", (link_d) => {
            if (link_d.source.id === d.id || link_d.target.id === d.id) {
              return STROKE * 4;
            }
            return STROKE;
          });
          text.attr("class", (text_d) => {
            if (text_d.id !== d.id && !relatedNodesSet.has(text_d.id)) {
              return "inactive";
            }
            return "";
          });
        };

        const onMouseout = function (d) {
          node.attr("class", "");
          link.attr("class", "");
          text.attr("class", "");
          link.attr("stroke-width", STROKE);
        };

        const sameNodes = (previous, next) => {
          if (next.length !== previous.length) {
            return false;
          }

          const map = new Map();
          for (const node of previous) {
            map.set(node.id, node.label);
          }

          for (const node of next) {
            const found = map.get(node.id);
            if (!found || found !== node.title) {
              return false;
            }
          }

          return true;
        };

        const sameEdges = (previous, next) => {
          if (next.length !== previous.length) {
            return false;
          }

          const set = new Set();
          for (const edge of previous) {
            set.add(`${edge.source.id}-${edge.target.id}`);
          }

          for (const edge of next) {
            if (!set.has(`${edge.source.id}-${edge.target.id}`)) {
              return false;
            }
          }

          return true;
        };

        const graphWrapper = document.getElementById('graph-wrapper')
        const element = document.createElementNS("http://www.w3.org/2000/svg", "svg");
        element.setAttribute("width", graphWrapper.getBoundingClientRect().width);
        element.setAttribute("height", window.innerHeight * 0.8);
        graphWrapper.appendChild(element);

        const reportWindowSize = () => {
          element.setAttribute("width", window.innerWidth);
          element.setAttribute("height", window.innerHeight);
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
        let text = g.append("g").attr("class", "text").selectAll(".text");

        const resize = () => {
          if (d3.event) {
            const scale = d3.event.transform;
            zoomLevel = scale.k;
            g.attr("transform", scale);
          }
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
  .wrapper {
    max-width: 46em;
  }
</style>
