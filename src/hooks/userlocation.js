import { useEffect, useState } from "react";

function useLocation() {
  const [lat, setLat] = useState(null);
  const [lon, setLon] = useState(null);
  const [error, setError] = useState(null);

  useEffect(() => {
    const getLocation = () => {
      if (!navigator.geolocation) {
        setError("Geolocation not supported");
        return;
      }

      navigator.geolocation.getCurrentPosition(
        (position) => {
          setLat(position.coords.latitude);
          setLon(position.coords.longitude);
        },
        () => {
          setError("Permission denied");
        }
      );
    };

    getLocation();
  }, []);

  return { lat, lon, error };
}

export default useLocation;