import React, {FC} from 'react';
import {View} from 'react-native';
import {useDispatch} from 'react-redux';
import styled from 'styled-components';
import {ApartamentsList} from '../components/Apartaments';
import {Loading, Message} from '../components/shared';
import {useTypedSelector} from '../hooks';
import {likeApartament} from '../redux/actions/shopActions';

const Home: FC = () => {
  const {apartaments, loading, error} = useTypedSelector((state) => state.shop);
  const dispatch = useDispatch();
  if (loading) return <Loading />;
  if (error) return <Message title={error} />;

  return (
    <Wrapper>
      <ApartamentsList apartaments={apartaments}
        onPressItemLike={(item) => dispatch(likeApartament(item.id))}/>
    </Wrapper>
  );
};


const Wrapper = styled(View)`
  flex: 1;
  background: ${({theme}) => theme.colors.background}
`;

export default Home;
