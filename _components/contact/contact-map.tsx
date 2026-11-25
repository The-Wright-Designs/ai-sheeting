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
  const mapRef = useRef<google.maps.Map | null>(null);
  const markerRef = useRef<google.maps.marker.AdvancedMarkerElement | null>(
    null,
  );

  const { isLoaded, loadError } = useLoadScript({
    googleMapsApiKey: process.env.NEXT_PUBLIC_GOOGLE_MAPS_API_KEY as string,
    libraries,
  });

  const onMapLoad = useCallback((map: google.maps.Map) => {
    try {
      mapRef.current = map;
      if (
        window.google &&
        window.google.maps &&
        window.google.maps.marker &&
        window.google.maps.marker.AdvancedMarkerElement
      ) {
        markerRef.current = new google.maps.marker.AdvancedMarkerElement({
          map,
          position,
          title: "A&I Sheeting",
        });
      }
    } catch (error) {
      console.error("Error loading map:", error);
    }
  }, []);

  const onUnmount = useCallback(() => {
    try {
      if (markerRef.current) {
        markerRef.current.map = null;
        markerRef.current = null;
      }
      mapRef.current = null;
    } catch (error) {
      console.error("Error unmounting map:", error);
    }
  }, []);

  if (loadError) {
    return (
      <div
        className={classNames(
          "grid h-full w-full place-items-center bg-skyBlue py-16",
          cssClasses,
        )}
      >
        <p className="text-heading text-blue">Error loading map</p>
      </div>
    );
  }

  if (!isLoaded || !window.google || !window.google.maps) {
    return (
      <div
        className={classNames(
          "grid h-full w-full place-items-center bg-skyBlue py-16",
          cssClasses,
        )}
      >
        <p className="text-heading text-blue">Map loading...</p>
      </div>
    );
  }

  return (
    <GoogleMap
      zoom={16}
      center={position}
      mapContainerClassName={cssClasses}
      onLoad={onMapLoad}
      onUnmount={onUnmount}
      options={{ mapId: "698d62123be3d858eceeb3f1" }}
    />
  );
};

export default ContactMap;
