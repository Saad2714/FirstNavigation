import React from 'react';
import { StyleSheet, Text, View, Button,TouchableOpacity} from 'react-native';

// Yes changed from App to Home in below line...
export default class Home extends React.Component{
render(){
  return (
    <View style={styles.container}>
      <Text>You are following 10 friends!! </Text>
      <Button 
        title="Go to follow page"
        onPress = {()=>{
            this.props.navigation.navigate("Follow")
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
