import { MapContainer, TileLayer, Marker, Popup, LayersControl, LayerGroup } from 'react-leaflet';
import 'leaflet/dist/leaflet.css';
import L from 'leaflet';
import { useEffect } from 'react';
import { FaPhoneAlt } from "react-icons/fa";
import { Button } from '../sources';
import { TbChevronDownRight } from 'react-icons/tb';
import { useRouter } from 'next/navigation';

export const Contact = () => {
  // useEffect(() => {
  //   // Fix for missing marker icons
  //   L.Icon.Default.mergeOptions({
  //     iconRetinaUrl: 'https://unpkg.com/leaflet@1.7.1/dist/images/marker-icon-2x.png',
  //     iconUrl: 'https://unpkg.com/leaflet@1.7.1/dist/images/marker-icon.png',
  //     shadowUrl: 'https://unpkg.com/leaflet@1.7.1/dist/images/marker-shadow.png',
  //   });
  // }, []);

  const position: [number, number] = [34.020882, -6.841650]; // Coordinates of Rabat

  const router = useRouter()

  const handleClick = () => {
    router.push('/estimate')
  };

  return (
    <div className="flex  items-center justify-center flex-col gap-14  bg-[#161519] py-12 ">
      <div className='w-full max-w-[1140px] flex justify-center flex-col gap-20 ' >
        <div className='w-full flex justify-center items-center mt-16' >
          <h1 className='text-6xl text-white font-bold tracking-[-2px]'>Contact</h1>
        </div>
        <div className='w-full h-auto flex gap-11 max-lg:flex-col' >
          <div className='flex-1 z-20 relative'>
            {/* <MapContainer center={position} zoom={33} style={{ height: '400px', width: '100%' }}> */}
              {/* <LayersControl position="topright">
                <LayerGroup >
                  <TileLayer
                    url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
                    attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
                  />
                </LayerGroup>
                <LayerGroup>
                  <TileLayer
                    url="https://api.mapbox.com/styles/v1/mapbox/satellite-v9/tiles/256/{z}/{x}/{y}@2x?access_token=YOUR_MAPBOX_ACCESS_TOKEN"
                    attribution='Imagery © <a href="https://www.mapbox.com/about/maps/">Mapbox</a>'
                  />
                </LayerGroup>
              </LayersControl>
              <Marker position={position}>
                <Popup>Rabat, Morocco</Popup>
              </Marker> */}
            {/* </MapContainer> */}
          </div>
          <div className='flex-1 flex flex-col gap-5 max-lg:px-5'>
            <div className=' w-16 h-16 text-white flex justify-center items-center border border-white rounded-full'>
              <FaPhoneAlt className='' />
            </div>
            <div className='text-white mt-6'>
              <span className='font-bold text-2xl'>Get in touch</span>
            </div>
            <div className='max-w-[80%] flex flex-col gap-1'>
              <p className='leading-[26px]  text-[#7d7c80] text-base font-light'> Bd Moulouya Oued Loukos 12000, Témara - 4er Etage, Morocco</p>
              <span className='font-bold leading-[26px] text-white' >+212 693-788807 ( a landline is useless, join me anytime ! )</span>
            </div>
            <div className='max-w-[80%] flex flex-col gap-1'>
              <p className='leading-[26px]  text-[#7d7c80] text-base font-light'>Email:</p>
              <span className='font-bold leading-[26px] text-white' >Hamza8pro@gmail.com</span>
            </div>
          </div>
        </div>
      </div>
      <div className='w-full  max-w-[1140px] max-lg:px-5 '>
        <Button
          onClick={handleClick}
          text="GET ESTIMATE"
          icon={<TbChevronDownRight className='text-base mr-2' />}
          size="small"
          variant="filledGray"
          className="font-bold text-xl-important cursor-pointer border rounded-[5px] transition duration-300 ease-in active:border-red-500"
        />
      </div>
    </div>
  )

}