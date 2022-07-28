import React from 'react';
import { View } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';

import { Provider } from 'react-redux';
import { store } from './src/app/redux/store';
import RootNavigation from './src/app/navigator/Navigator';

const App = () => {
  return (
    <Provider store={store}>
      <SafeAreaView>
        <View style={{height:'100%', width: '100%'}}>
          <RootNavigation />
        </View>
      </SafeAreaView>
    </Provider>
  )
}

export default App;