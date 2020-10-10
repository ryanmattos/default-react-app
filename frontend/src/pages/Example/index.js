import React, { useEffect, useState } from 'react'

import api from '../../services/api'

import './styles.css'

export default function Example() {
   const [response, setResponse] = useState({});
   useEffect(() => {
      api.post('test').then(response => {
         setResponse(response.data)
      })
   })

   return (
      <div id="example-container">
         <p>
            Hello, i'm a {response.success}! 
         </p>
      </div>
   )
}