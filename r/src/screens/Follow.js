import React from 'react';
import { StyleSheet, Text, View, Button, TouchableOpacity} from 'react-native';

// Yes changed from App to Follow in below line...
export default class Follow extends React.Component{
render(){
  return (
    <View style={styles.container}>
      <Text>You are following Arya Stark </Text>
      <Button 
        title="Go back to Home page"
        onPress = {()=>{
            this.props.navigation.navigate("Home")
        }}
      />
    </View>
  );
}
}


const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
