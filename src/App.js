import { useState, useEffect } from 'react';
import './assets/style.scss';
import axios from 'axios';
import Map from './components/Map';
import Loader from './components/Loader';

const App = () => {
  const [eventData, setEventData] = useState([]);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    const fetchEvent = async () => {
      setLoading(true);

      const res = await axios.get('https://eonet.sci.gsfc.nasa.gov/api/v2.1/events');
      const { events } = await res.data;

      setEventData(events);
      setLoading(false);
    };

    fetchEvent();
  }, []);

  return <div>{!loading ? <Map eventData={eventData} /> : <Loader />}</div>;
};

export default App;
