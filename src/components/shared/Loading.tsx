import React, {useEffect, useRef} from 'react';
import {Text, View, Image, Animated, Easing} from 'react-native';
import styled from 'styled-components';
import {laodingImage} from '../../assets';

const Loading = () => {
  const animateLoading = useRef(new Animated.Value(0)).current;

  useEffect(() => {
    runAnimation();
  }, []);

  const runAnimation = () => {
    animateLoading.setValue(0);
    Animated.timing(animateLoading, {
      toValue: 1,
      duration: 200 * 1000,
      easing: Easing.linear,
      useNativeDriver: true,
    }).start(() => runAnimation());
  };

  const rotateAnimate = animateLoading.interpolate({
    inputRange: [0, 1],
    outputRange: [0, 360],
  });

  return (
    <Wrapper>
      <Animated.View style={{
        transform: [{
          rotate: rotateAnimate,
        }],
      }}>
        <Img source={laodingImage}/>
      </Animated.View>
      <Tx>Загрузка...</Tx>
    </Wrapper>
  );
};

const Wrapper = styled(View)`
    flex: 1;
    align-items: center;
    padding-top: 50%;
`;

const Img = styled(Image)`
    width: 100px;
    height: 100px;
`;
const Tx = styled(Text)`
    font-size: 32px;
    margin-top: 30px;

    color: ${({theme}) => theme.colors.main}
`;

export default Loading;
