"use client";
import { useState, useEffect, useRef } from 'react';
import { GoogleMap, LoadScript, Marker } from '@react-google-maps/api';
import { Loader } from '@googlemaps/js-api-loader';

interface MapProps {
  location: {
    lat: number;
    lng: number;
  };
}

const Map: React.FC<MapProps> = ({ location }) => {
  const mapRef = useRef(null);

  useEffect(()=>{
    const initMap = async()=>{
      const loader = new Loader({
        apiKey:process.env.MAP_API_KEY as string, 
        version:"weekly"
      });
      const {Map} = await loader.importLibrary('maps');
      const mapOption = {
        center:location, 
        zoom:17, 
        mapId:"aura"
      }
      const map = new Map(mapRef.current as HTMLDivElement, mapOption);
    }

    initMap();
  }, []);

  // const [mapLoaded, setMapLoaded] = useState(false);

  const containerStyle = {
    width: '100%',
    height: '250PX',
    borderRadius:"0.5rem"
  };

  const defaultCenter = {
    lat: location.lat,
    lng: location.lng,
  };

  // useEffect(() => {
  //   setMapLoaded(true);
  // }, []);


  return (
 <>
 
 <h1>{process.env.MAP_API_KEY}</h1>
    <div style={{height:"250px"}} ref={mapRef}>

    </div>




{/*  
 <LoadScript googleMapsApiKey={process.env.MAP_API_KEY!} >
      {mapLoaded && (
        <GoogleMap
          mapContainerStyle={containerStyle}
          center={defaultCenter}
          zoom={12}
          
        >
          <Marker position={defaultCenter} />
        </GoogleMap>
      )}
    </LoadScript> */}

 </>

  );
};

export default Map;
