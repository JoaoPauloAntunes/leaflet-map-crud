(async () => {
  const range = (start, end) => {
    return Array(end - start + 1).fill().map((_, idx) => start + idx);
  }

  const transform = value => value / 1000; // scale 1:1000 cm
  const reactangleCenter = ([[x1, y1], [x2, y2]]) => [(x1 + x2) / 2, (y1 + y2) / 2];

  const createMap = () => {
    document.map2 = new L.Map('map2').setView([0, 0], 7);
    L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
      maxZoom: 19,
      attribution: '© OpenStreetMap'
    }).addTo(document.map2);

    var bounds = [
      [
        transform(-250),
        transform(-250),
      ],
      [
        transform(1250),
        transform(1250),
      ],
    ];
    var rectangle = L.rectangle(bounds, { color: 'red', weight: 1 }).addTo(document.map2);
    document.map2.setView(reactangleCenter(bounds), 7);
  }
  createMap();
  
  
  const destroyMap = () => {
    document.map2.off();
    document.map2.remove();
  }
  

  $("#destroy-map2").click((e) => {
    console.log("e:", e);
    destroyMap();
  });


  $("#create-map2").click((e) => {
    console.log("e:", e);
    createMap();
  });


  $("#recreate-map2").click((e) => {
    console.log("e:", e);
    destroyMap();
    createMap();
  });


  $("#map2-add-rectangle2").click((e) => {
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
    var rectangle = L.rectangle(bounds, { color: 'green', weight: 1 }).addTo(document.map2);
  });
})();