import { useEffect, useRef } from "react";
import { Link } from "react-router-dom";
import L from "leaflet";
import type { Area } from "@/lib/sns-data";
import { MapPin, ArrowRight } from "lucide-react";

type Props = {
  areas: Area[];
};

export function BayAreaMap({ areas }: Props) {
  const containerRef = useRef<HTMLDivElement>(null);
  const mapRef = useRef<L.Map | null>(null);

  useEffect(() => {
    if (!containerRef.current || mapRef.current) return;

    const map = L.map(containerRef.current, {
      center: [37.3861, -122.0839],
      zoom: 11,
      scrollWheelZoom: false,
      zoomControl: true,
      attributionControl: true,
    });

    L.tileLayer("https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png", {
      attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors',
      maxZoom: 19,
    }).addTo(map);

    const customIcon = L.divIcon({
      html: `<div style="width:28px;height:28px;border-radius:50% 50% 50% 0;background:#3a6b4c;border:2px solid #fff;box-shadow:0 2px 8px rgba(0,0,0,0.3);transform:rotate(-45deg);display:flex;align-items:center;justify-content:center;"><span style="transform:rotate(45deg);width:8px;height:8px;border-radius:50%;background:#fff;"></span></div>`,
      className: "ss-map-pin",
      iconSize: [28, 28],
      iconAnchor: [14, 28],
      popupAnchor: [0, -28],
    });

    areas.forEach((area) => {
      const marker = L.marker([area.lat, area.lng], { icon: customIcon }).addTo(map);
      marker.bindPopup(
        `<div style="font-family:inherit;padding:4px 2px;">
          <strong style="font-size:14px;color:#2d4a36;">${area.name}</strong><br/>
          <span style="font-size:12px;color:#666;">${area.county} County · ${area.metro}</span><br/>
          <a href="/areas/${area.slug}" style="font-size:13px;color:#3a6b4c;font-weight:600;text-decoration:none;">View services &rarr;</a>
        </div>`,
      );
    });

    mapRef.current = map;

    return () => {
      map.remove();
      mapRef.current = null;
    };
  }, [areas]);

  return (
    <div className="grid grid-cols-1 gap-6 lg:grid-cols-3">
      <div className="lg:col-span-2">
        <div className="bezel">
          <div className="bezel-inner overflow-hidden">
            <div
              ref={containerRef}
              className="h-[400px] w-full md:h-[500px]"
              style={{ zIndex: 1 }}
            />
          </div>
        </div>
      </div>
      <div className="lg:col-span-1">
        <div className="bezel h-full">
          <div className="bezel-inner flex h-full flex-col gap-3 p-5 md:p-6">
            <h3 className="font-heading text-lg font-medium text-foreground">
              All Service Areas
            </h3>
            <p className="text-sm text-muted-foreground">
              Click a pin on the map or a link below to view services in that area.
            </p>
            <ul className="grid grid-cols-1 gap-2 sm:grid-cols-2 lg:grid-cols-1">
              {areas.map((area) => (
                <li key={area.slug}>
                  <Link
                    to={`/areas/${area.slug}`}
                    className="group flex items-center justify-between rounded-lg px-3 py-2 text-sm text-foreground transition-fluid hover:bg-muted"
                  >
                    <span className="flex items-center gap-2">
                      <MapPin className="size-3.5 text-primary" aria-hidden="true" />
                      {area.name}
                    </span>
                    <ArrowRight className="size-3.5 text-muted-foreground transition-fluid group-hover:gap-2.5 group-hover:text-primary" aria-hidden="true" />
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
}
