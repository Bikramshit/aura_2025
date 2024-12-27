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

  // useEffect(()=>{
  //   const initMap = async()=>{
  //     const loader = new Loader({
  //       apiKey:process.env.MAP_API_KEY as string, 
  //       version:"weekly"
  //     });
  //     const {Map} = await loader.importLibrary('maps');
  //     const mapOption = {
  //       center:location, 
  //       zoom:17, 
  //       mapId:"aura"
  //     }
  //     const map = new Map(mapRef.current as HTMLDivElement, mapOption);
  //   }

  //   initMap();
  // }, []);

  const [mapLoaded, setMapLoaded] = useState(false);

  const containerStyle = {
    width: '100%',
    height: '250PX',
    borderRadius:"0.5rem"
  };

  const defaultCenter = {
    lat: location.lat,
    lng: location.lng,
  };

  useEffect(() => {
    setMapLoaded(true);
  }, []);


  return (
 <>
 
    {/* <div style={{height:"250px"}} ref={mapRef}>

    </div> */}

<iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3683.7235749937117!2d88.4867745!3d22.589439699999996!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3a0275a57df0d8fb%3A0x3d6f3c9f28c20ab1!2sAliah%20University!5e0!3m2!1sen!2sin!4v1735283019295!5m2!1sen!2sin" width="100%" height="250px" className='rounded-lg'  loading="lazy" ></iframe>

{/* <iframe src="https://www.google.com/maps/d/embed?mid=1FJ_AdVum2wev4_L279WoYr39JUHXn4k&hl=en&ehbc=2E312F" width="100%" height="480"></iframe> */}


{/*  
 <LoadScript >
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
