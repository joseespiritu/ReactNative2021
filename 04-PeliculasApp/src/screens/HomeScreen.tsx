import React from 'react';
import { ActivityIndicator, Dimensions, FlatList, Text, View } from 'react-native';
import { useSafeAreaInsets } from 'react-native-safe-area-context';
import { MoviePoster } from '../components/MoviePoster';
import { useMovies } from '../hooks/useMovies';

import Carousel from 'react-native-snap-carousel';
import { ScrollView } from 'react-native-gesture-handler';
import HorizontalSlider from '../components/HorizontalSlider';

const { width: windowWidth } = Dimensions.get('window');

export const HomeScreen = () => {

  const { peliculasEnCine, peliculasPopulares, isLoading } = useMovies();
  const { top } = useSafeAreaInsets();

  if (isLoading) {
    return (
      <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
        <ActivityIndicator color={'red'} size={100} />
      </View>
    )
  }

  return (
    <ScrollView>
      <View style={{ marginTop: top + 10}}>
        {/* Carousel principal */}
        <View style={{
          height: 440
        }}>
          <Carousel
            data={peliculasEnCine}
            renderItem={({ item }: any) => <MoviePoster movie={item} />}
            sliderWidth={windowWidth}
            itemWidth={300}
            inactiveSlideOpacity={0.9}
          />
        </View>

        {/* Peliculas populares */}
        <HorizontalSlider  title={"En cine"} movies={peliculasEnCine}/>
        <HorizontalSlider  title={"Populares"} movies={peliculasPopulares}/>

      </View>
    </ScrollView>
  )
}