import Welcomescreen from './src/screen/Welcomescreen';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { NavigationContainer } from '@react-navigation/native';

const stack = createNativeStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <stack.Navigator initialRouteName='Welcome'>
      <stack.Screen name='Welcome' component={Welcomescreen} options={{headerShown:false}}/>
      </stack.Navigator>
    </NavigationContainer>
  );
}

