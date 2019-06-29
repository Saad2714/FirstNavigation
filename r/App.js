import React from 'react';
import { StyleSheet, Text, View, TouchableOpacity} from 'react-native';
import { createStackNavigator, createAppContainer } from "react-navigation";
import Home from "./src/screens/Home.js"
import Follow from "./src/screens/Follow.js"


const MainNavigator = createStackNavigator(
  {
  Home: {screen: Home},
  Follow: {screen: Follow},
  },
  
  {
    defaultNavigationOptions: 
     {
       headerTintColor:"#fff",
       headerStyle:{
         backgroundColor:"#BA2F16"
       },
       headerTitleStyle:{
         color:"#FFF"
       }


     }
  }
)


const App = createAppContainer(MainNavigator)
export default App;



// export default class App extends React.Component{
// render(){
//   return (
//     <View style={styles.container}>
//       <Text>Let's create An App</Text>
//     </View>
//   );
// }
// }


const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});

