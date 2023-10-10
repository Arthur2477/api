import React, { useEffect, useState } from 'react';
import { View, Text, FlatList, TouchableOpacity, Image } from 'react-native';
import { Colors } from 'react-native/Libraries/NewAppScreen';

const RenderUserCard = ({ item }) => (
  <TouchableOpacity onPress={() => console.log('Detalhes do usuario:', item)}>
    <View style={{ backgroundColor: 'orange', padding: 10, marginBottom: 10 }}>
      <Image source={{ uri: item.image }} style={{ width: 100, height: 100 }} />
      <Text style={{ backgroundColor: "orange",  fontSize: 18, fontWeight: 'bold', marginTop: 5 }}>{item.username}</Text>
      <Text style={{ fontSize: 16  }}>{item.email}</Text>
    </View>
  </TouchableOpacity>
);

const UserScreen = () => {
  const [users, setUsers] = useState([]);

  useEffect(() => {
    fetch('https://dummyjson.com/users')
      .then(response => response.json())
      .then(data => setUsers(data));
  }, []);


  return (
    <View style={{ flex: 1, padding: 10 }}>
      <FlatList
        data={users}
        renderItem={({item})=><RenderUserCard item ={item} /> }
        keyExtractor={item => item.id.toString()}
      />
    </View>
  );
};

export default UserScreen;