import React, { Component } from 'react'
import {
  SafeAreaView,
  StyleSheet,
  ScrollView,
  View,
  Text,
  TouchableOpacity,
  StatusBar,
  Dimensions,
  Image
} from 'react-native';
import MapView, { Marker,PROVIDER_GOOGLE } from 'react-native-maps';
import { Container, Button, Header, Content, Left } from 'native-base'
import Icon from 'react-native-vector-icons/AntDesign'
import Location from 'react-native-vector-icons/MaterialIcons'
import { TextInput } from 'react-native-gesture-handler';
import Geolocation from '@react-native-community/geolocation';

const { width, height } = Dimensions.get('window');
class Map extends Component {
    
  
  render() {
    return (
      <View>
<TouchableOpacity style={{
          margin: 10,
          width: width * .1,
        }}
          onPress={() => this.props.navigation.openDrawer()}  >
          <Icon name='menu-unfold' size={30} />
        </TouchableOpacity>
      </View>
      // <Container>
      //   <MapView
      //     provider={PROVIDER_GOOGLE}
      //     showsUserLocation={this.state.showsUserLocation}
      //     style={{
      //       width: width * 1,
      //       height: height * 1,
      //       position: 'absolute',
      //     }}
      //     initialRegion={this.state}
      //   >          
      //   </MapView>
        

      //   <View style={{
      //     justifyContent: 'space-evenly',
      //     // alignItems:'center'
      //     flexDirection: 'row',
      //     position: 'absolute',
      //     bottom: 0,
      //     marginBottom: 15,
      //     // marginLeft: 20,
      //     width: width * 1,
      //   }}>
      //     <TextInput style={{
      //       width: width * .75,
      //       backgroundColor: 'white',
      //       borderRadius: 30,
      //       elevation: 3,
      //       height: height * .06,
      //       paddingLeft: 20,

      //     }}>
      //     </TextInput>

      //     <View style={{
      //       justifyContent: 'center',
      //       alignItems: 'center',
      //       width: width * .105,
      //       height: height * .06,
      //       backgroundColor: 'white',
      //       borderRadius: 100,
      //       elevation: 3,
      //     }}>
      //       <TouchableOpacity 
      //       onPress = {() => this.work() }
      //       >
      //         <Location name='my-location' size={25} />

      //       </TouchableOpacity>

      //     </View>
      //   </View>
      // </Container>
    );
  }
}
const styles = StyleSheet.create({
  backgroundImager: {
    position: 'relative',

  },
  heading: {
    marginTop: -90,
    marginLeft: 25,
  },
  nextButton: {
    backgroundColor: '#35aeff',
    width: width * .1,
    height: height * .06,
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 100,
    elevation: 3,

  },
});

export default Map;