import {View, Text} from 'react-native';
import React, {useEffect, useState} from 'react';
import firestore from '@react-native-firebase/firestore';
import {Box, Input, NativeBaseProvider, Button} from 'native-base';

const SubmitScreen = () => {
  const [name, setName] = useState();
  const [comment, setComment] = useState();
  const [url, setUrl] = useState();

  useEffect(() => {
    // firestore()
    //   .collection('checkin')
    //   .add({
    //     comment: 'Firebase Testing Add',
    //     name: 'Ada Lovelace',
    //     url: 'https://picsum.photos/200',
    //   })
    //   .then(() => {
    //     console.log('check in added!');
    //   });
    // console.log('test only');
    console.log(name);
    console.log(url);
    console.log(comment);
  });

  const addToDb = () => {
    try {
      firestore()
        .collection('checkin')
        .add({
          comment: comment,
          name: name,
          url: url,
        })
        .then(() => {
          console.log('check in added tes hereeeeee!');
        });
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <NativeBaseProvider my="15">
      <Box alignItems="center">
        <Input
          mx="3"
          mt="5"
          placeholder="Name"
          w="90%"
          value={name}
          onChangeText={name => setName(name)}
        />
      </Box>
      <Box alignItems="center">
        <Input
          mx="3"
          mt="5"
          placeholder="Comment"
          w="90%"
          value={comment}
          onChangeText={comment => setComment(comment)}
        />
      </Box>
      <Box alignItems="center">
        <Input
          mx="3"
          mt="5"
          placeholder="ImageUrl"
          w="90%"
          value={url}
          onChangeText={url => setUrl(url)}
        />
      </Box>
      <Box alignItems="center">
        <Button my="10" size="md" w="90%" onPress={() => addToDb()}>
          Add
        </Button>
      </Box>
    </NativeBaseProvider>
  );
};

export default SubmitScreen;
