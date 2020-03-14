import React from 'react' ;
import { StyleSheet, Text, View, SafeAreaView, ScrollView, Dimensions, Image} from 'react-native'; 
import { DrawerItems } from 'react-navigation-drawer';
import Icon from 'react-native-vector-icons/FontAwesome5';
import DrawerScreen1 from '../screen/HomeScreen';
import DrawerScreen2 from '../screen/Map';
import { createDrawerNavigator } from 'react-navigation-drawer';
const { width, height } = Dimensions.get('window');

// import DrawerScreen2 from '../../screens/drawerScreen/DrawerScreen2' 
// import DrawerScreen3 from '../../screens/drawerScreen/DrawerScreen3' 
// import { Right }from 'native-base';

    const CustomDrawerComponent = (props)=>(   
    <View>

    <SafeAreaView>
          <View style={{
            height:150, backgroundColor:'#35aeff', alignItems:'center', justifyContent:'center',}}>
              <Image source={require('../images/logo.png')} style={{
                height:120,
                 width:120,
                  }} />
          </View>
          <ScrollView>
              <DrawerItems {...props} />
          </ScrollView>  
    </SafeAreaView>
    </View>
     )


    export default createDrawerNavigator( {    
      DrawerScreen1: {
        screen: DrawerScreen1,
        navigationOptions: {
          drawerLabel: 'Home',
          drawerIcon: ({ tintColor }) => <Icon name="user-circle" size={17} />,
        }   },

      DrawerScreen2: {
        screen: DrawerScreen2,
        navigationOptions: {
          drawerLabel: 'DrawerScreen2',
          drawerIcon: ({ tintColor }) => <Icon name="user-circle" size={17} />,
        }   },

      // DrawerScreen3: {
      //   screen: DrawerScreen3,
      //   navigationOptions: {
      //     drawerLabel: 'DrawerScreen3',
      //     drawerIcon: ({ tintColor }) => <Icon name="user-circle" size={17} />,
      //   }   }, 
      }, 
        {   drawerPosition :"left",   
            contentComponent:CustomDrawerComponent,
            drawerWidth:width * .7,

    });
