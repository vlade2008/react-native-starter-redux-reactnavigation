import React from 'react';
import { StyleSheet, Text, View,Dimensions } from 'react-native';

import { Provider } from 'react-redux';
import Carousel, { Pagination,ParallaxImage } from 'react-native-snap-carousel';

import { sliderWidth, itemWidth } from '../styles/SliderEntry.style';
import styles, { colors } from '../styles/index.style';
import SliderEntry from './SliderEntry';

import LinearGradient from 'react-native-linear-gradient';

export default class Dashboard extends React.Component {
  constructor(props){
    super(props);

    this.state = {
      slider1ActiveSlide: 0,
      slider1Ref: null,
      data:[
        {
            title: 'Beautiful and dramatic Antelope Canyon',
            subtitle: 'Lorem ipsum dolor sit amet et nuncat mergitur',
            illustration: 'http://i.imgur.com/UYiroysl.jpg'
        },
        {
            title: 'Earlier this morning, NYC',
            subtitle: 'Lorem ipsum dolor sit amet',
            illustration: 'http://i.imgur.com/UPrs1EWl.jpg'
        },
        {
            title: 'White Pocket Sunset',
            subtitle: 'Lorem ipsum dolor sit amet et nuncat ',
            illustration: 'http://i.imgur.com/MABUbpDl.jpg'
        },
      ]
    }
  }

  _renderItem ({item, index}) {
       return (
           <View style={{ height: viewportHeight }} ><Text>{item.name}</Text></View>
       );
   }

   _renderItemWithParallax ({item, index}, parallaxProps) {
        return (
          <SliderEntry
              data={item}
              even={(index + 1) % 2 === 0}
              parallax={true}
              parallaxProps={parallaxProps}
            />
        );
    }


  render() {
    return (
      <View style={{flex:1}}>
        <Carousel
          ref={(c) => { if (!this.state.slider1Ref) { this.setState({ slider1Ref: c }); } }}
          data={this.state.data}
          renderItem={this._renderItemWithParallax}
          sliderWidth={sliderWidth}
          itemWidth={itemWidth}
          hasParallaxImages={true}
          firstItem={this.state.slider1ActiveSlide}
          inactiveSlideScale={0.94}
          inactiveSlideOpacity={0.7}
          enableMomentum={false}
          containerCustomStyle={styles.slider}
          contentContainerCustomStyle={styles.sliderContentContainer}
          autoplay={false}
          onSnapToItem={(index) => this.setState({ slider1ActiveSlide: index }) }
        />
        <Pagination
            dotsLength={this.state.data.length}
            activeDotIndex={this.state.slider1ActiveSlide}
            containerStyle={styles.paginationContainer}
            dotColor={'rgba(255, 255, 255, 0.92)'}
            dotStyle={styles.paginationDot}
            inactiveDotColor={colors.black}
            inactiveDotOpacity={0.4}
            inactiveDotScale={0.6}
            carouselRef={this.state.slider1Ref}
            tappableDots={!!this.state.slider1Ref}
          />
      </View>
    );
  }
}
