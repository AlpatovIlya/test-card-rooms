import React, {FC, useContext} from 'react';
import {FlatList} from 'react-native';
import {ThemeContext} from 'styled-components';
import {Apartament} from '../../models';
import ApartamentItem from './ApartamentItem';

type Props = {
    apartaments: Apartament[],
    onPressItemLike?: (item: Apartament) => void;
}

const ApartaamentList: FC<Props> = ({
  apartaments,
  onPressItemLike = () => {}}) => {
  const theme = useContext(ThemeContext);

  return (
    <FlatList
      data={apartaments}
      numColumns={2}
      columnWrapperStyle={{
        margin: 5,
        backgroundColor: theme.colors.sub,
      }}
      renderItem={({item}) => <ApartamentItem
        key={item.id}
        onPressLike={() => onPressItemLike(item)}
        wrapperStyle={{
          flex: 1,
        }}
        data={item}/>
      }

    />
  );
};

export default ApartaamentList;
