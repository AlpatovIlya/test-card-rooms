import React, {FC} from 'react';
import {Image, Text, View, ViewStyle, TouchableOpacity} from 'react-native';
import styled, {useTheme} from 'styled-components';
import {LikeIcon} from '../../assets/icons';
import notFoundIMage from '../../assets/images/notFoundImage.jpg';
import {Apartament} from '../../models';

type Props = {
    data: Apartament;
    wrapperStyle?: ViewStyle
    onPressLike?: () => void;
}

const ApartamentItem: FC<Props> = ({data, wrapperStyle, onPressLike}) => {
  const theme = useTheme();
  return (
    <Wrapper style={wrapperStyle} onPress={onPressLike}>
      <ImageItem resizeMode="cover" source={notFoundIMage}/>

      <ItemLike
        width={30}
        height={30}
        fill={data.like ? 'red': theme.colors.text}/>
      <Title>{data.title}</Title>
      <Type>{data.Type}</Type>
      <DataList>
        <DataWrapper>
          <DataText>Комнат {data.rooms}</DataText>
        </DataWrapper>
        <DataWrapper>
          <DataText>{data.Address}</DataText>
        </DataWrapper>
        <DataWrapper>
          <DataText>{data.Area}</DataText>

        </DataWrapper>
      </DataList>
    </Wrapper>
  );
};

const Wrapper = styled(TouchableOpacity)`
  border-width: 2px;
  border-color: ${({theme}) => theme.colors.main};
  padding: 20px 10px;
`;

const ImageItem = styled(Image)`
  width: 100%;
  height: 0;
  padding-bottom: 56%;
  background: gray;
  margin-bottom: 20px;
`;

const Title = styled(Text)`
  font-size: 16px;
  color: ${({theme}) => theme.colors.title};
`;
const Type = styled(Text)`
  font-size: 12px;  
  color: ${({theme}) => theme.colors.title};
  margin-bottom: 15px;


`;
const DataList = styled(View)`
  border-width: 1px;
  border-color:  ${({theme}) => theme.colors.sub};
`;
const DataWrapper = styled(View)`
  border-bottom-width: 1px;
  border-color:  ${({theme}) => theme.colors.sub};
  padding: 5px 15px;

`;
const DataText = styled(Text)`
  font-size: 12px;
  color: ${({theme}) => theme.colors.text}
`;

const ItemLike = styled(LikeIcon)`
  
`;

export default ApartamentItem;
