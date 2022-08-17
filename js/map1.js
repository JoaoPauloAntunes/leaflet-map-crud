(async () => {
  const range = (start, end) => {
    return Array(end - start + 1).fill().map((_, idx) => start + idx);
  }

  const transform = value => value / 1000; // scale 1:1000 cm
  const reactangleCenter = ([[x1, y1], [x2, y2]]) => [(x1 + x2) / 2, (y1 + y2) / 2];

  const createMap = () => {
    document.map1 = new L.Map('map1').setView([0, 0], 7);

    var bounds = [
      [
        transform(0),
        transform(0),
      ],
      [
        transform(1000),
        transform(1000),
      ],
    ];
    var rectangle = L.rectangle(bounds, { color: 'blue', weight: 1 }).addTo(document.map1);
    document.map1.setView(reactangleCenter(bounds), 7);
  }
  createMap();
  

  $("#destroy-map1").click((e) => {
    console.log("e:", e);
    document.map1.off();
    document.map1.remove();
  });


  $("#create-map1").click((e) => {
    console.log("e:", e);
    createMap();
  });


  $("#map1-add-rectangle2").click((e) => {
    console.log("e:", e);
    var bounds = [
      [
        transform(100),
        transform(1200),
      ],
      [
        transform(1550),
        transform(1550),
      ],
    ];
    var rectangle = L.rectangle(bounds, { color: 'green', weight: 1 }).addTo(document.map1);
  });
})();