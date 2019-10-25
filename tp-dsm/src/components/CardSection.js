import React from 'react';
import { View } from 'react-native';

const CardSection = (props) => {
  return (
    <View style={styles.containerStyle}>
      {props.children}
    </View>
  );
};

const styles = {
  containerStyle: {
    borderBottomWidth: 1,
    padding: 5,
    backgroundColor: '#19A5C4',
    justifyContent: 'center',
    flexDirection: 'row',
    borderColor: '#8b8b92',
    position: 'relative'
  }
};

export default CardSection;
