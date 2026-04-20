import { StyleSheet, View, TouchableOpacity, Text} from 'react-native';
import MapScreen from '@/components/MapView';
import Header from '@/components/Header';
import { useState } from 'react';
import {useRouter} from 'expo-router';

export default function Trips() {
 const [street, setStreet] = useState(null);
 const [city, setCity] = useState(null);
 const router = useRouter();
    return (   
   <View style = {styles.container}>
      <MapScreen onAddressChange={(s,c) => {setStreet(s); setCity(c);}}/>
      <View style={{position: 'absolute', top: 0, left: 0, right: 0}}>
      <Header street={street} city={city} showSearch={false}   showBackButton={true}/>
       </View>
      </View>
         ); 
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});
