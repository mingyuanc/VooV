// src/components/Map.tsx
import { MapContainer, Marker, Popup, TileLayer } from "react-leaflet";
import "leaflet/dist/leaflet.css";
import "leaflet-defaulticon-compatibility";
import "leaflet-defaulticon-compatibility/dist/leaflet-defaulticon-compatibility.css";
import { townData } from "../data/town";
import { cityData } from "../data/city";
import { Map } from "leaflet";
import L from "leaflet";

import { Button } from "@/components/ui/button";
import { useRef } from "react";

const greenIcon = new L.Icon({
  iconUrl:
    "https://raw.githubusercontent.com/pointhi/leaflet-color-markers/master/img/marker-icon-2x-green.png",
  shadowUrl:
    "https://cdnjs.cloudflare.com/ajax/libs/leaflet/0.7.7/images/marker-shadow.png",
  iconSize: [25, 41],
  iconAnchor: [12, 41],
  popupAnchor: [1, -34],
  shadowSize: [41, 41],
});

interface mapProps {
  setPin: (x: string) => void;
  isSelectingStart: boolean;
  starting: string;
  ending: string;
  toggleStart: (x: boolean) => void;
}
export default function MyMap({
  setPin,
  isSelectingStart,
  starting,
  ending,
  toggleStart,
}: mapProps) {
  const mapRef = useRef(null);
  const position: [number, number] = [1.3521, 103.8198];

  const zoom = 13;

  const townD =
    townData.find((x) => starting === x.name) ||
    townData.find((x) => ending === x.name)
      ? []
      : townData;
  const cityD =
    cityData.find((x) => starting === x.name) ||
    cityData.find((x) => ending === x.name)
      ? []
      : cityData;

  return (
    <div className="relative min-h-screen min-w-full z-0">
      <MapContainer
        ref={mapRef}
        zoomControl={false}
        center={position}
        zoom={zoom}
        scrollWheelZoom={true}
        className="min-h-screen  min-w-full absolute"
      >
        <TileLayer
          attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
          url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
        />
        {townD.map((town) => (
          <Marker position={town.location as [number, number]} key={town.name}>
            <Popup>
              <Button
                variant="outline"
                className="w-full border-none hover:bg-white"
                onClick={() => {
                  (mapRef.current! as Map).closePopup();
                  setPin(town.name);
                  toggleStart(false);
                }}
              >
                {isSelectingStart
                  ? `Set ${town.name} as Pickup Point?`
                  : `Set ${town.name} as Destination?`}
              </Button>
            </Popup>
          </Marker>
        ))}

        {cityD.map((town) => (
          <Marker
            position={town.location as [number, number]}
            key={town.name}
            icon={greenIcon}
          >
            <Popup>
              <Button
                variant="outline"
                className="w-full border-none hover:bg-white"
                onClick={() => {
                  (mapRef.current! as Map).closePopup();
                  setPin(town.name);
                  toggleStart(false);
                }}
              >
                {isSelectingStart
                  ? `Set ${town.name} as Pickup Point?`
                  : `Set ${town.name} as Destination?`}
              </Button>
            </Popup>
          </Marker>
        ))}
      </MapContainer>
    </div>
  );
}
