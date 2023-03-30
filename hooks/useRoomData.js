import { useState, useEffect } from 'react';

const useRoomData = () => {
  const [skrRooms, setSkrRooms] = useState([]);

  useEffect(() => {
    fetch('http://localhost:3000/api/roomData')
      .then((res) => res.json())
      .then((data) => setSkrRooms(data));
  }, []);

  return { skrRooms };
};

export default useRoomData;
