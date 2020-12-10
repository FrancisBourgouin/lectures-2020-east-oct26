import { useEffect, useState } from 'react';
import axios from 'axios'

export default function useAxiosGET() {
  const [res, setRes] = useState(undefined)
  const [url, setUrl] = useState("")

  useEffect(() => {
    axios
      .get(url)
      .then(_res => setRes(_res))
      .catch(() => setRes(null))
  })

  return { res, setUrl }

}