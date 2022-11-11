import { FlatList, Text } from 'native-base';
import React, { useEffect, useState } from 'react'
import { ActivityIndicator, View } from 'react-native';

export const ListPage = () => {
    
  const [isLoading, setLoading] = useState(true);
  const [data, setData] = useState([]);
  let cont=1;

  const getData = async () => {
     try {
      const response = await fetch('https://jsonplaceholder-typicode-com.translate.goog/posts?_x_tr_sl=en&_x_tr_tl=es&_x_tr_hl=es-419&_x_tr_pto=sc');
      const json = await response.json();
      setData(json);
    } catch (error) {
      console.error(error);
    } finally {
      setLoading(false);
    }
  }

  useEffect(() => {
    cont=1;
    getData();
  }, []);

  return (
    
    <View style={{ flex: 1, padding: 24 }}>
    {isLoading ? <ActivityIndicator/> : (
      <FlatList
        data={data}
        keyExtractor={({ id }, index) => id}
        renderItem={({ item }) => (
          <Text>Titulo {cont++}# : {item.title}</Text>
        )}
      />
    )}
  </View>
  )
}