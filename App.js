import { NavigationContainer } from '@react-navigation/native';
import TabStackScreen from './screens/TabStackScreen';
import {
  useQuery,
  useMutation,
  useQueryClient,
  QueryClient,
  QueryClientProvider,
} from '@tanstack/react-query'
import { ReactQueryDevtools } from '@tanstack/react-query-devtools';
import React, { useState } from 'react';
import { StyleSheet, Text, View } from 'react-native';
import AppStackScreen from './screens/TabStackScreen';

const queryClient = new QueryClient()

const App = () => {
  const [load,setload] = useState(false);
  setTimeout(()=>{
    setload(true)
  },5000)
  if(load==false){
    return(
      <View style={styles.mainContainer}>
        <Text> ㅎㅇㅎㅇㅎㅇ</Text>
      </View>
    )
  }
  else{
  return (
    <QueryClientProvider client={queryClient}>
      <NavigationContainer>
        <AppStackScreen/>
      </NavigationContainer>
    </QueryClientProvider>
  );
  }
};

const styles = StyleSheet.create({
  mainContainer: {
    alignContent:'center',
    justifyContent:'center',
    marginTop: 32,
    paddingHorizontal: 24,
  },
});

export default App;
