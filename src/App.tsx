import { Point } from "ol/geom";
import { OlMap } from "./components/OlMap";
import { Feature, Map, View } from "ol";
import { OSM } from "ol/source";
import { Tile } from "ol/layer";
import { OlFeature } from "./components/OlFeature";
import { OlLayer } from "./components/OlLayer";
import VectorLayer from "ol/layer/Vector";
import VectorSource from "ol/source/Vector";

function App() {
  const map = new Map({
    view: new View({
      center: [0, 0],
      zoom: 2,
    }),
  });

  return (
    <OlMap map={map}>
      <OlLayer layer={new Tile({ source: new OSM() })}></OlLayer>
      <OlLayer layer={new VectorLayer({ source: new VectorSource() })}>
        <OlFeature
          feature={
            new Feature({
              geometry: new Point([139.745556, 35.658611]).transform(
                "EPSG:4326",
                "EPSG:3857"
              ),
              name: "東京タワー",
            })
          }
          onClick={() => {
            alert("東京タワー");
          }}
        />
        <OlFeature
          feature={
            new Feature({
              geometry: new Point([135.506325, 34.652536]).transform(
                "EPSG:4326",
                "EPSG:3857"
              ),
              name: "通天閣",
            })
          }
          onClick={() => {
            alert("通天閣");
          }}
        />
      </OlLayer>
    </OlMap>
  );
}

export default App;
