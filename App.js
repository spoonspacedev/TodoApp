// In App.js in a new project

import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { Text, View, StyleSheet, Image, TouchableOpacity, Button, Alert } from 'react-native';
import { Menu, Provider } from 'react-native-paper';
import NewScreen from './app/screens/NewTodo';

function ThreeDot() {
  const [visible, setVisible] = React.useState(false);
  const openMenu = () => setVisible(true);
  const closeMenu = () => setVisible(false);
  return (
    <Provider>
    <Menu
      visible={visible}
      onDismiss={closeMenu}
      anchor={
        <TouchableOpacity
          onPress={() => openMenu}
        >
          <Image source={require('./app/assets/three_dot.png')} style={styles.image_btn} />
        </TouchableOpacity>
      }>
      <Menu.Item onPress={() => { }} title="Sort by" />
      <Menu.Item onPress={() => { }} title="Delete all" />
    </Menu>
    </Provider>
  );
}

function Appbar(){
  return(
    <View style={{
      flexDirection: 'row',
    }}>
          <View style={{
            flex: 1
            }}>
              <Text style={styles.txt_heading}>
                Todos
              </Text>
          </View>
      <View style={{
        flex: 1,
        justifyContent: 'flex-end',
        alignItems: 'center',
        flexDirection: 'row',
          }}>
        <View >
          <View>
          <TouchableOpacity
            onPress={() => alert('Simple Button pressed')}
            >
              <Image source={require('./app/assets/search.png')} style={styles.image_btn} />
            </TouchableOpacity>
          </View>
      </View>
      <ThreeDot />
    </View>
    </View>
  )
}

function NothingTodos() {
  return (
    <View style={{
      top:200,
      flexDirection: 'column',
      justifyContent: 'center',
      alignItems: 'center'
    }}>
      <Image source={require('./app/assets/box.png')} style={styles.box_image} />
      <Text style={styles.text_youhavenothing}>
        You have nothing to-dos
      </Text> 
    </View>
  );
}

//a tao mau roi nhung man hinh kia em lam tuong tu la dc 
//gio nha em can tao cho a 1 structure code roi moi lam tiep
//em mo  project len di mo folder cua no day
function Home({  }) {
  return (
    <View>
        <View>
        <Appbar/>
      </View>
    <View style={styles.container}>
      <NothingTodos /></View>
      <View>
    <FloatingActionButton></FloatingActionButton>
      </View>
    </View>
  )
}

function FloatingActionButton( {navigation}){
  return(
    <View style={{
      position:"absolute",
      right:40,
    }}>
    <TouchableOpacity
    style={styles.border_button}
    onPress={() => {
      navigation.navigate("NewScreen")
    }}
  >
    <View style={styles.container_icon_button}>
      <Image source={require('./app/assets/add.png')} style={styles.icon_button} />
    </View>
  </TouchableOpacity></View>
  );
}

const Stack = createNativeStackNavigator();

const HelloWorldApp = (route) => {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen
        name="Home"
        component={Home}
        options ={
          {headerShown:false}
        }
      />
        <Stack.Screen name='NewScreen' component={NewScreen} options={{
          // title: "Add",
          // headerStyle: {
          //   backgroundColor: '#FFFFFF',
          // },
          // headerTintColor: '#000000',
          // headerTitleStyle: {
          //   fontWeight: 'bold',
          // },
          // headerRight: () => (
          //   <View style={{
          //     flexDirection: 'row',
          //     alignItems: 'flex-end'
          //   }}>
          //     <View >
          //       <Provider >
          //         <View>
          //           <TouchableOpacity
          //             onPress={() => {
          //               navigation.navigate({
          //                 name: 'Home',
          //                 params: { post: text },
          //                 merge: true,
          //               });
          //             }}

          //           >
          //             <Image source={require('./app/assets/tick.png')} style={styles.image_btn} />
          //           </TouchableOpacity>
          //         </View>
          //       </Provider>
          //     </View>
          //   </View>
          // )
        }} />
      </Stack.Navigator>
    </NavigationContainer>
  )
}
const styles = StyleSheet.create({

  container: {
    position: "absolute",
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
    alignItems: 'center',
    justifyContent: 'center'
  },
  container_icon_button: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center'
  },
});
export default HelloWorldApp;