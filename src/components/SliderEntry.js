import React, { Component } from 'react';
import { View, Text, Image, TouchableOpacity } from 'react-native';
import PropTypes from 'prop-types';
import { ParallaxImage } from 'react-native-snap-carousel';
import styles from '../styles/SliderEntry.style';

export default class SliderEntry extends Component {
  constructor(props){
    super(props)
  }


    get image () {
        const { data: { illustration }, parallax, parallaxProps, even } = this.props;

        return parallax ? (
            <ParallaxImage
              source={{ uri: illustration }}
              containerStyle={[styles.imageContainer, even ? styles.imageContainerEven : {}]}
              style={[styles.image, { position: 'relative' }]}
              parallaxFactor={0.35}
              showSpinner={true}
              spinnerColor={even ? 'rgba(255, 255, 255, 0.4)' : 'rgba(0, 0, 0, 0.25)'}
              {...parallaxProps}
            />
        ) : (
            <Image
              source={{ uri: illustration }}
              style={styles.image}
            />
        );
    }
    render () {

        const { data: { title, subtitle, activeHome }, even } = this.props;

        const uppercaseTitle = title ? (
            <Text
              style={[styles.title,styles.titleEven]}
              numberOfLines={2}
            >
                { title.toUpperCase() }
            </Text>
        ) : false;

        return (
            <View style={styles.slideInnerContainer}>
                <View style={[styles.imageContainer, styles.imageContainerEven]}>
                    { this.image }
                    <View style={[styles.radiusMask,styles.radiusMaskEven]} />
                </View>
                <View style={[styles.textContainer, styles.textContainerEven]}>
                    { uppercaseTitle }
                    <Text
                      style={[styles.subtitle,styles.subtitleEven]}
                      numberOfLines={2}
                    >
                        { subtitle }
                    </Text>
                    {
                      activeHome ? (
                        <TouchableOpacity onPress={()=>{activeHome()}}>
                          <Text style={[styles.subtitle,styles.subtitleEven]}>See more..</Text>
                        </TouchableOpacity>
                      ) : null
                    }

                </View>
            </View>
        );
    }
}
