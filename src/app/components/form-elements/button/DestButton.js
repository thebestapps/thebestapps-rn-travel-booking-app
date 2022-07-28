import React from 'react';
import { Pressable, Text } from 'react-native';

import styles from "./styles.scss";

const DestinationButton = ({title, subTitle, onPress, transparent}) => {
  return (
    <Pressable 
      style={(transparent === true) ? styles.destButtonTrans : styles.destButton}
      onPress={onPress}
    >
      <Text style={styles.destButtonText}>{title}</Text>
      {!transparent && <Text style={styles.destButtonSubText}>{subTitle}</Text>}
    </Pressable>
  )
}

export default DestinationButton