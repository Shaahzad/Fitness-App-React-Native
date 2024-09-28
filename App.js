import Welcomescreen from './src/screen/Welcomescreen';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { NavigationContainer } from '@react-navigation/native';
import Home from './src/screen/Home';
import Exercises from './src/screen/Exercises';
import ExercisesDetail from './src/screen/ExercisesDetail';
import { LogBox } from 'react-native';

const stack = createNativeStackNavigator();

export default function App() {
  LogBox.ignoreAllLogs();
  return (
    <NavigationContainer>
      <stack.Navigator initialRouteName='Welcome'>
      <stack.Screen name='Welcome' component={Welcomescreen} options={{headerShown:false}}/>
      <stack.Screen name='Home' component={Home} options={{headerShown:false}}/>
      <stack.Screen name='Exercises' component={Exercises} options={{headerShown:false,
        presentation:'fullScreenModal'
      }}/>
      <stack.Screen name='ExercisesDeatil' component={ExercisesDetail} options={{headerShown:false,
        presentation:'modal',
      }}/>
      </stack.Navigator>
    </NavigationContainer>
  );
}

