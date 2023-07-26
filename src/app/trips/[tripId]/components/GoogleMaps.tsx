import { GoogleMap, Marker, useLoadScript } from '@react-google-maps/api';
import { Trip } from '@prisma/client';
import React from 'react';

interface TripMapProps {
    trip: Trip;
}

const GoogleMaps: React.FC<TripMapProps> = ({ trip }) => {
    const { isLoaded, loadError } = useLoadScript({
        googleMapsApiKey: process.env.GOOGLE_MAPS_API_KEY!,
    });

    if (loadError) {
        return <div>Error loading...</div>;
    }

    if (!isLoaded) {
        return <div>Loading...</div>;
    }

    const mapContainerStyle = {
        width: '100%',
        height: '100%',
    };

    const customIcon = {
        url: '/map-marker.svg',
        scaledSize: new window.google.maps.Size(50, 50),
    };

    const customMapStyles = {
        disableDefaultUI: true,
        zoomControl: true,
        styles: [
            {
                "featureType": "all",
                "elementType": "labels.text",
                "stylers": [
                    {
                        "color": "#878787"
                    }
                ]
            },
            {
                "featureType": "all",
                "elementType": "labels.text.stroke",
                "stylers": [
                    {
                        "visibility": "off"
                    }
                ]
            },
            {
                "featureType": "landscape",
                "elementType": "all",
                "stylers": [
                    {
                        "color": "#f9f5ed"
                    }
                ]
            },
            {
                "featureType": "road.highway",
                "elementType": "all",
                "stylers": [
                    {
                        "color": "#f5f5f5"
                    }
                ]
            },
            {
                "featureType": "road.highway",
                "elementType": "geometry.stroke",
                "stylers": [
                    {
                        "color": "#c9c9c9"
                    }
                ]
            },
            {
                "featureType": "water",
                "elementType": "all",
                "stylers": [
                    {
                        "color": "#aee0f4"
                    }
                ]
            }
        ]
    }

    const center = {
        lat: trip.latitude,
        lng: trip.longitude,
    };

    return (
        <GoogleMap
            mapContainerStyle={mapContainerStyle}
            zoom={13}
            center={center}
            options={customMapStyles}>
            <Marker
                position={center}
                icon={customIcon} />
        </GoogleMap >
    );
};

export default GoogleMaps;