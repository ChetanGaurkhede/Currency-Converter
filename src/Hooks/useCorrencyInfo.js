import React, { useEffect, useState } from 'react'


//useCorrencyInfo is custom hook which return the object
function useCorrencyInfo(currency) {
  const [data, setData] = useState({});

  useEffect(() => {

    fetch(`https://2024-03-06.currency-api.pages.dev/v1/currencies/${currency}.json`)
      .then((res) => res.json())
      .then((res) => setData(res[currency]))

    console.log(data)
  }, [currency])
  console.log(data)
  return data // data return the object containe values

}

export default useCorrencyInfo
