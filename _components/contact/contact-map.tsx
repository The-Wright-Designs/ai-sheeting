"use client";

import { GoogleMap, useLoadScript } from "@react-google-maps/api";
import classNames from "classnames";
import { useCallback, useRef } from "react";

interface Props {
  cssClasses?: string;
}

const libraries: "marker"[] = ["marker"];
const position = { lat: -26.1518844, lng: 28.0893148 };

const ContactMap = ({ cssClasses }: Props) => {
  const markerRef = useRef<google.maps.marker.AdvancedMarkerElement | null>(
    null,
  );

  const { isLoaded, loadError } = useLoadScript({
    googleMapsApiKey: process.env.NEXT_PUBLIC_GOOGLE_MAPS_API_KEY as string,
    libraries,
  });

  const onMapLoad = useCallback((map: google.maps.Map) => {
    try {
      if (window.google?.maps?.marker?.AdvancedMarkerElement) {
        markerRef.current = new google.maps.marker.AdvancedMarkerElement({
          map,
          position,
        });
      }
    } catch (error) {
      console.error("Error loading map:", error);
    }
  }, []);

  const onUnmount = useCallback(() => {
    if (markerRef.current) {
      markerRef.current.map = null;
      markerRef.current = null;
    }
  }, []);

  if (loadError || !isLoaded || !window.google?.maps)
    return (
      <div
        className={classNames(
          "border-2 border-black text-[30px] grid place-items-center py-16 w-full h-full",
          cssClasses,
        )}
      >
        {loadError ? "Error loading map" : "Map loading..."}
      </div>
    );

  return (
    <GoogleMap
      zoom={13}
      center={position}
      mapContainerClassName={cssClasses}
      onLoad={onMapLoad}
      onUnmount={onUnmount}
      options={{ mapId: "DEMO_MAP_ID" }}
    />
  );
};

export default ContactMap;
