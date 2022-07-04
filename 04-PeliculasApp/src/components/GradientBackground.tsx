import React, { useContext, useEffect } from 'react'
import { Animated, StyleSheet, View } from 'react-native';
import LinearGradient from 'react-native-linear-gradient';
import { GradientContext } from '../context/GradientContext';
import { useFade } from '../hooks/useFade';

interface Props {
  children: JSX.Element | JSX.Element[];
}

export const GradientBackground = ({ children }: Props) => {

  const { colors, prevColors, setMainPrevColors } = useContext(GradientContext);

  const { opacity, fadeIn, fadeOut } = useFade();

  useEffect(() => {
    fadeIn(() => {
      setMainPrevColors(colors);
      fadeOut(0);
    });
  }, [colors])


  return (
    <View style={{ flex: 1 }}>
      <LinearGradient
        colors={[prevColors.primary, prevColors.secondary, 'white']}
        style={{ ...StyleSheet.absoluteFill }}
        start={{ x: 0.1, y: 0.1 }}
        end={{ x: 0.5, y: 0.7 }}
      />
      <Animated.View
        style={{
          ...StyleSheet.absoluteFill,
          opacity
        }}
      >
        <LinearGradient
          colors={[colors.primary, colors.secondary, 'white']}
          style={{ ...StyleSheet.absoluteFill }}
          start={{ x: 0.1, y: 0.1 }}
          end={{ x: 0.5, y: 0.7 }}
        />
      </Animated.View>
      {children}
    </View>
  )
}
