import {View, Text, FlatList, StyleSheet, Pressable, Image} from 'react-native';
import React, {useEffect, useState} from 'react';
import firestore from '@react-native-firebase/firestore';

const Check = () => {
  const [users, setUsers] = useState();

  useEffect(() => {
    const users = [];

    const subscriber = firestore()
      .collection('checkin')
      .onSnapshot(
        querySnapshot => {
          querySnapshot.forEach(documentSnapshot => {
            users.push({
              ...documentSnapshot.data(),
              key: documentSnapshot.id,
            });
          });

          setUsers(users);
          console.log(users);
        },
        error => {
          console.error('Error fetching Firestore data: ', error);
        },
      );

    return () => subscriber();
  }, []);

  const currentDate = new Date();
  return (
    <View
      style={{
        // backgroundColor: 'gray',
        height: '100%',
      }}>
      {/* <Text>Lets check the checkinsss</Text> */}
      {/* the card for checkin screen */}
      {/* <View style={styles.container}>
        <Image
          source={{
            uri: 'https://picsum.photos/200',
          }}
          //   style={styles.avatar}
        />
        <View style={styles.topContainer}>
          <Image
            source={{
              uri: 'https://media.vanityfair.com/photos/5ba12e6d42b9d16f4545aa19/3:2/w_1998,h_1332,c_limit/t-Avatar-The-Last-Airbender-Live-Action.jpg',
            }}
            style={styles.avatar}
          />
          <View style={styles.metaContainer}>
            <View>
              <Text style={styles.timings}>name</Text>
              <Text style={styles.description}>date</Text>
            </View>
          </View>
        </View>
      </View> */}
      {/* card ends */}
      <FlatList
        data={users}
        renderItem={({item}) => (
          <View
            style={{
              marginTop: 20,
              backgroundColor: 'white',
              borderRadius: 16,
              marginLeft: 5,
              marginRight: 5,
              padding: '5%',
            }}>
            <Image
              source={{uri: item.url}}
              style={{width: '100%', height: 200, borderRadius: 16}}
            />
            <View style={styles.row}>
              <Image
                source={require('../assets/user.png')}
                style={{
                  width: '20%',
                  height: 50,
                  borderRadius: 32,
                  //   backgroundColor: 'black',
                }}
              />
              <View style={styles.column}>
                <Text>{item.name}</Text>
                <Text>{currentDate.toDateString()}</Text>
              </View>
            </View>
            <View>
              <Text style={{fontSize: 25, padding: '5%'}}>{item.comment}</Text>
            </View>
          </View>
        )}
      />
    </View>
  );
};

export default Check;

const styles = StyleSheet.create({
  row: {
    flexDirection: 'row',
    padding: '5%',
  },
  column: {
    flexDirection: 'column',
    marginLeft: '5%',
  },
});
