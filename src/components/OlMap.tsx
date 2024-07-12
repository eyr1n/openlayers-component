import { Map } from "ol";
import React, { useEffect, useRef } from "react";
import { OlMapContext } from "./OlMapContext";

import "ol/ol.css";

interface Props {
  map?: Map;
}

export function OlMap({
  map = new Map(),
  children,
}: React.PropsWithChildren<Props>) {
  const container = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (container.current) {
      map.setTarget(container.current);
    }
  }, [map]);

  return (
    <OlMapContext.Provider value={map}>
      <div ref={container} style={{ width: "100%", height: "100%" }}>
        {children}
      </div>
    </OlMapContext.Provider>
  );
}
