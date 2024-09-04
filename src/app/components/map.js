import { useEffect, useRef, useState } from "react";

export const KakaoMap = () => {
  const mapRef = useRef(null);
  const [map, setMap] = useState(null);
  const [level, setLevel] = useState(3);
  const [clusterer, setClusterer] = useState(null);
  const [places, setPlaces] = useState([]);
  const [keyword, setKeyword] = useState("");

  useEffect(() => {
    const loadKakaoMap = () => {
      const kakaoMapScript = document.createElement("script");
      kakaoMapScript.async = false;
      kakaoMapScript.src = `//dapi.kakao.com/v2/maps/sdk.js?appkey=700d399006256f95732f06b19c046ba5&libraries=services,clusterer&autoload=false`;
      document.head.appendChild(kakaoMapScript);

      const onLoadKakaoAPI = () => {
        window.kakao.maps.load(() => {
          const container = mapRef.current;
          const options = {
            center: new window.kakao.maps.LatLng(33.450701, 126.570667),
            level: level,
          };

          const newMap = new window.kakao.maps.Map(container, options);
          setMap(newMap);

          // Initialize Marker Clusterer
          const newClusterer = new window.kakao.maps.MarkerClusterer({
            map: newMap,
            averageCenter: true,
            minLevel: 10,
          });
          setClusterer(newClusterer);

          addCustomControls(newMap);
          addMarkers(newMap, newClusterer);
        });
      };

      kakaoMapScript.addEventListener("load", onLoadKakaoAPI);

      return () => kakaoMapScript.removeEventListener("load", onLoadKakaoAPI);
    };

    loadKakaoMap();
  }, [level]);

  useEffect(() => {
    if (map) {
      map.setLevel(level);
    }
  }, [level, map]);

  const handleZoomIn = () => {
    setLevel((prevLevel) => Math.max(prevLevel - 1, 1));
  };

  const handleZoomOut = () => {
    setLevel((prevLevel) => Math.min(prevLevel + 1, 14));
  };

  const addCustomControls = (map) => {
    const zoomControl = new window.kakao.maps.ZoomControl();
    map.addControl(zoomControl, window.kakao.maps.ControlPosition.RIGHT);

    const mapTypeControl = new window.kakao.maps.MapTypeControl();
    map.addControl(mapTypeControl, window.kakao.maps.ControlPosition.TOPRIGHT);
  };

  const addMarkers = (map, clusterer) => {
    const positions = [
      {
        title: "Marker 1",
        latlng: new window.kakao.maps.LatLng(33.450701, 126.570667),
        content: "This is Marker 1",
      },
      {
        title: "Marker 2",
        latlng: new window.kakao.maps.LatLng(33.450936, 126.569477),
        content: "This is Marker 2",
      },
      {
        title: "Marker 3",
        latlng: new window.kakao.maps.LatLng(33.450879, 126.57208),
        content: "This is Marker 3",
      },
    ];

    const markers = positions.map((position) => {
      const imageSrc =
        "https://t1.daumcdn.net/localimg/localimages/07/mapapidoc/markerStar.png";
      const imageSize = new window.kakao.maps.Size(24, 35);
      const markerImage = new window.kakao.maps.MarkerImage(
        imageSrc,
        imageSize
      );

      const marker = new window.kakao.maps.Marker({
        map: map,
        position: position.latlng,
        title: position.title,
        image: markerImage,
      });

      const overlayContent = document.createElement("div");
      overlayContent.className = "custom-overlay";
      overlayContent.innerHTML = `
        <div style="padding:5px;background:white;border:1px solid black;">
          <h4>${position.title}</h4>
          <p>${position.content}</p>
        </div>`;
      const overlay = new window.kakao.maps.CustomOverlay({
        content: overlayContent,
        position: position.latlng,
        yAnchor: 1,
      });

      window.kakao.maps.event.addListener(marker, "click", () => {
        overlay.setMap(map);
      });

      window.kakao.maps.event.addListener(map, "click", () => {
        overlay.setMap(null);
      });

      return marker;
    });

    clusterer.addMarkers(markers);
  };

  const searchPlaces = () => {
    const ps = new window.kakao.maps.services.Places();
    ps.keywordSearch(keyword, (data, status, _pagination) => {
      if (status === window.kakao.maps.services.Status.OK) {
        const bounds = new window.kakao.maps.LatLngBounds();
        const newPlaces = data.map((place) => ({
          title: place.place_name,
          latlng: new window.kakao.maps.LatLng(place.y, place.x),
          address: place.road_address_name || place.address_name,
        }));
        setPlaces(newPlaces);

        newPlaces.forEach((place) => {
          bounds.extend(place.latlng);
        });
        map.setBounds(bounds);
      } else {
        alert("Search failed.");
      }
    });
  };

  return (
    <main className="w-full flex flex-col items-center justify-left pt-4 relative">
      <div className="absolute z-50 mb-4 pt-4 left-4 ">
        <div className="flex">
          <input
            type="text"
            placeholder="Search places"
            value={keyword}
            onChange={(e) => setKeyword(e.target.value)}
            className="search-container"
          />
          <button
            onClick={searchPlaces}
            className="px-2 py-1 bg-blue-500 text-brown-800 rounded search-button"
          >
            검색
          </button>
        </div>

        {places.length > 0 && (
          <div className="w-full mt-4 absolute">
            <ul className="absolute py-4 px-4 rounded-2xl min-w-60 special-shadow max-h-[60vh] overflow-y-auto">
              {places.map((place, index) => (
                <li key={index} className="mb-4 ">
                  <button
                    onClick={() => {
                      map.setLevel(3);
                      map.panTo(place.latlng);
                    }}
                    className="special-shadow-button rounded-2xl py-1 px-2 text-blue-600"
                  >
                    {place.title}
                  </button>
                  <p className="text-gray-600">{place.address}</p>
                </li>
              ))}
            </ul>
          </div>
        )}
      </div>
      <div
        ref={mapRef}
        className="w-full h-[50vh] sm:h-[60vh] md:h-[70vh] lg:h-[80vh]"
      ></div>
    </main>
  );
};
export default KakaoMap;
