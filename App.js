import React, { useEffect } from 'react'
import auth from '@react-native-firebase/auth'


export default function App() {
  console.log("test")
  useEffect(() => {
    console.log(auth().currentUser)
  }, [])
  return null
}
