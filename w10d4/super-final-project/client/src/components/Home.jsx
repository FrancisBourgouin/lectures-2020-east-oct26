import axios from 'axios';
import { useEffect } from 'react';

export default function Home(props) {

  useEffect(() => {
    axios.get('/api/urls').then(res => res.data)
  }, [])
  return (
    <section>
      <h1>TINYAPP</h1>
      <ul>
        <li>SHORT LINK - LONG LINK - COPY LINK</li>
        <li>SHORT LINK - LONG LINK - COPY LINK</li>
        <li>SHORT LINK - LONG LINK - COPY LINK</li>
        <li>SHORT LINK - LONG LINK - COPY LINK</li>
        <li>SHORT LINK - LONG LINK - COPY LINK</li>
        <li>SHORT LINK - LONG LINK - COPY LINK</li>
        <li>SHORT LINK - LONG LINK - COPY LINK</li>
        <li>SHORT LINK - LONG LINK - COPY LINK</li>
        <li>SHORT LINK - LONG LINK - COPY LINK</li>
        <li>SHORT LINK - LONG LINK - COPY LINK</li>
        <li>SHORT LINK - LONG LINK - COPY LINK</li>
      </ul>
    </section>
  )
}