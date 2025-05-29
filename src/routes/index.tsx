import { NavigationContainer } from '@react-navigation/native'
import React from 'react'
import StackNavigation from './stack-route'

const Routes = () => {
  return (
    <NavigationContainer>
    <StackNavigation/>
  </NavigationContainer>
  )
}

export default Routes;