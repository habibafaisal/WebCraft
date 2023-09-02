import {View, Text, FlatList, StyleSheet, Pressable, Image} from 'react-native';
import React, {useEffect, useState} from 'react';
import firestore from '@react-native-firebase/firestore';

const Check = () => {
  //   const [users, setUsers] = useState();
  const users = [
    {name: 'cscschabiba', url: 'https://picsum.photos/200', comment: 'grereg'},
  ];
  //   useEffect(() => {
  //     const subscriber = firestore()
  //       .collection('checkin')
  //       .onSnapshot(querySnapshot => {
  //         const users = [];

  //         querySnapshot.forEach(documentSnapshot => {
  //           users.push({
  //             ...documentSnapshot.data(),
  //             key: documentSnapshot.id,
  //           });
  //         });

  //         setUsers(users);
  //         console.log(users);
  //       });
  //   });
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
              //   width: '100%',
              marginLeft: 5,
              marginRight: 5,
              margin: 'auto',
              alignContent: 'center',
              flex: 1,
              justifyContent: 'center',
              padding: '5%',
            }}>
            <Image source={{uri: item.url}} alt="image"></Image>
            <View style={styles.row}>
              <Image source={item.url} alt=" userimage"></Image>
              <Image
                // resizeMode="center"
                // resizeMode="stretch"
                source={{uri: item.url}}
              />
              <View style={styles.column}>
                <Text>{item.name}</Text>
                <Text>{currentDate.toDateString()}</Text>
                {/* <Text>{item.url}</Text> */}
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
    // padding: '5%',
  },
});
