import * as React from 'react';
import {View, Text} from 'react-native';
import {Appbar, Title} from 'react-native-paper';

const MyComponent = (props) => {
  return (
    <Appbar.Header
      theme={{
        colors: {
          primary: '#00aaff',
        },
      }}
      style={{flexDirection:"row", justifyContent:"center"}}
      >
      <Title style={{color:"white"}}>{props.name}</Title>
    </Appbar.Header>
  );
};

export default MyComponent;
