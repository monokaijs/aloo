import React, { useEffect } from "react";
import { PersistGate } from "redux-persist/integration/react";
import { Provider } from "react-redux";
import { GestureHandlerRootView } from "react-native-gesture-handler";
import { NavigationContainer } from "@react-navigation/native";
import { Platform, StatusBar, UIManager } from "react-native";
import { Provider as PaperProvider } from "react-native-paper";
import { persistor, store, useAppDispatch } from "@redux/store";
import { lightTheme } from "@configs/theme/theme.config";
import { MainStackNavigation } from "@navigations/MainStackNavigation";
import { CreateMeetingSheet } from "@components/app/CreateMeetingSheet";

if (Platform.OS === "android" && UIManager.setLayoutAnimationEnabledExperimental) {
  UIManager.setLayoutAnimationEnabledExperimental(true);
}

const AppInner = () => {
  const dispatch = useAppDispatch();

  const linking = {
    prefixes: ["https://soundspace.page.link", "https://soundspace.app", "soundspace://"],
    config: {
      screens: {
        AcceptRoom: "acceptroom/:code"
      }
    }
  };

  return (
    <GestureHandlerRootView style={{ flex: 1 }}>
      <PaperProvider theme={lightTheme}>
        <NavigationContainer linking={linking}>
          <StatusBar
            translucent
            barStyle="dark-content"
            backgroundColor="transparent"
          />
          <MainStackNavigation />
          <CreateMeetingSheet/>
        </NavigationContainer>
      </PaperProvider>
    </GestureHandlerRootView>
  );
};

function App() {
  return (
    <Provider store={store}>
      <PersistGate loading={null} persistor={persistor}>
        <AppInner />
      </PersistGate>
    </Provider>
  );
}

export default App;
