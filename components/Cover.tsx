import * as React from 'react';
import { Image, StyleSheet, View, Dimensions } from 'react-native';
import { Album, MAX_HEADER_HEIGHT } from './Model';
import Animated from 'react-native-reanimated';

const { height } = Dimensions.get('window');

interface CoverProps {
  album: Album;
  y: Animated.Value<number>;
}

const { interpolate, Extrapolate } = Animated;

export default ({ album: { cover }, y }: CoverProps) => {
  const scale: any = interpolate(y, {
    inputRange: [-height, 0],
    outputRange: [6, 1],
    extrapolateRight: Extrapolate.CLAMP,
  });
  const opacity = 0.2;
  return (
    <Animated.View style={[styles.container, { transform: [{ scale }] }]}>
      <Image style={styles.image} source={cover} />
      <View
        style={{
          ...StyleSheet.absoluteFillObject,
          backgroundColor: 'black',
          opacity,
        }}
      />
    </Animated.View>
  );
};

const styles = StyleSheet.create({
  container: {
    ...StyleSheet.absoluteFillObject,
    height: MAX_HEADER_HEIGHT,
  },
  image: {
    ...StyleSheet.absoluteFillObject,
    width: undefined,
    height: undefined,
  },
});