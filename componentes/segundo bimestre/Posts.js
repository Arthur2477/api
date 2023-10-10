import React, { useEffect, useState } from 'react';
import { View, Text, Image } from 'react-native';

const PostScreen = ({ route }) => {
  const { userId } = route.params;
  const [users, setUsers] = useState(null);

  useEffect(() => {
    fetch(`https://dummyjson.com/posts${usersId}`)
      .then(response => response.json())
      .then(data => setUsers(data));
  }, [usersId]);

  if (!restaurante) {
    return (
      <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
        <Text>Carregando...</Text>
      </View>
    );
  }

  return (
    <View style={{ flex: 1, padding: 10 }}>
      <View style={{ backgroundColor: 'orange', padding: 10, marginBottom: 10 }}>
        <Image source={{ uri: users.imagem }} style={{ width: 200, height: 200, marginBottom: 10 }} />
        <Text style={{backgroundColor: 'orange', fontSize: 24, fontWeight: 'bold', marginBottom: 10 }}>{users.posts}</Text>
      </View>
    </View>
  );
};

export default PostScreen;
