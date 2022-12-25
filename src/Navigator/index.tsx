import * as React from "react";
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator, } from '@react-navigation/stack';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { createDrawerNavigator } from '@react-navigation/drawer';
import { Image, View, Text, Alert, BackHandler } from "react-native";
import Splash from "../Component/Splash";
import Login from "../Component/Auth/Login";
import Register from "../Component/Auth/Register";
import Dashboard from "../Component/Dashboard";
import LeftMenu from '../Component/LeftMenu';
import * as Constnt from "../Constant";
import History from "../Component/History";
import { responsiveFontSize, responsiveHeight } from "react-native-responsive-dimensions";
import { COLORS } from "../Configration";
import { Images } from "../Assets";
const navigationRef = React.createRef()
const MainStack = createStackNavigator();
const Tab = createBottomTabNavigator();
const Drawer = createDrawerNavigator();
const { SPLASH, LOGIN, REGISTER, DASHBOARD, MAIN,
  TABS, HISTORY } = Constnt.SCREENS;

const Navigator = (props: any) => {
  //=======================================Use Effect =======================//
  React.useEffect(() => {
    function handleBackButton() {
      // @ts-ignore
      const routeInfo = navigationRef.current.getCurrentRoute();
      if (
        routeInfo.name.toLowerCase() === LOGIN ||
        routeInfo.name.toLowerCase() === DASHBOARD
      ) {
        exitApp();
      } else {
        // @ts-ignore
        if (navigationRef.current.canGoBack()) {
          // @ts-ignore
          navigationRef.current.goBack();
        }
      }
      return true;
    }

    const backHandler = BackHandler.addEventListener(
      "hardwareBackPress",
      handleBackButton
    );

    return () => backHandler.remove();
  }, []);

  const exitApp = () => {
    Alert.alert(
      "Exit App",
      "Exiting the application?",
      [
        {
          text: "Cancel",
          onPress: () => { },
          style: "cancel",
        },
        {
          text: "OK",
          onPress: () => BackHandler.exitApp(),
        },
      ],
      {
        cancelable: false,
      }
    );
  };

  //========================Drawer Navigator ====================================//
  const DrawerNavigator = () => {
    return (
      <Drawer.Navigator
        screenOptions={{ headerShown: false, gestureEnabled: true, }}
        initialRouteName={TABS}
        drawerType={'back'}
        // drawerStyle={{ width: widthPercentageToDP(75) }}
        drawerContent={(props: any) => <LeftMenu {...props} />}>
        <Drawer.Screen
          name={TABS}
          component={Tabs}
          options={{
            headerShown: false,
            swipeEnabled: true,
            drawerLabel: 'Home',
          }}
        />
      </Drawer.Navigator>
    );
  };

  //=====================Tab Navigator =====================================//
  const tabScreenOptions = ({ route }: any) => ({
    tabBarShowLabel: false,
    tabBarStyle: {
      height: responsiveHeight(10),
      backgroundColor: COLORS.WHITE,
      borderColor: 'transparent',
    },

    // tabBarBackground: () => (
    //   <View style={{backgroundColor:'black' , position:'absolute' ,height:100, width:100,}} />
    // ),
    tabBarIcon: (data: any) => {
      const { focused } = data;
      let iconName;
      let title;
      if (route.name === DASHBOARD) {
        iconName = Images.home;
        title = 'Home';
      } else if (route.name === HISTORY) {
        iconName = Images.clock;
        title = "History";
      }
      return (
        <View style={{ alignItems: 'center' }}>
          <Image
            source={iconName}
            style={{
              height: 30,
              width: 30,
              tintColor: focused ? COLORS.BLACK : COLORS.GRAY,
              // marginBottom: METRICS.MAR_5,
            }}
            resizeMode={'contain'}
          />
          <Text
            style={{
              fontSize: responsiveFontSize(1.8),
              color: focused ? COLORS.BLACK : COLORS.GRAY,
            }}>
            {title}
          </Text>
        </View>
      );
    },
  });

  const Tabs = () => {
    return (
      <Tab.Navigator
        //backBehavior={}
        screenOptions={tabScreenOptions}
        defaultScreenOptions={{ headerShown: false }}>
        <Tab.Screen
          name={DASHBOARD}
          component={Dashboard}
          options={{ headerShown: false }} />
        <Tab.Screen
          name={HISTORY}
          component={History}
          options={{ headerShown: false }}
        />

      </Tab.Navigator>
    );
  };

  return (
    <NavigationContainer ref={navigationRef}>
      <MainStack.Navigator defaultScreenOptions={{ headerShown: false }}>
        <MainStack.Screen
          name={SPLASH}
          component={Splash}
          options={{ headerShown: false }}
        />
        <MainStack.Screen
          name={LOGIN}
          component={Login}
          options={{ headerShown: false }}
        />
        <MainStack.Screen
          name={REGISTER}
          component={Register}
          options={{ headerShown: false }}
        />

        <MainStack.Screen
          name={MAIN}
          component={DrawerNavigator}
          options={{ headerShown: false }}
        />
      </MainStack.Navigator>
    </NavigationContainer>
  );
};
export default Navigator;
