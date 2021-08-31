import React, {FC} from 'react';
import {Text, View} from 'react-native';
import styled from 'styled-components';
import {getRandomSmile} from '../../utils';

type Props = {
  title: string;
};


const Message: FC<Props> = ({title}) => {
  const smile = getRandomSmile();

  return (
    <Wrapper>
      <Title>{title}</Title>
      <Smile>{smile}</Smile>
    </Wrapper>
  );
};

const Wrapper = styled(View)`
  height: 100%;
  align-items: center;
  padding-top: 40px;
`;
const Title = styled(Text)`
  font-size: 24px;
  color: ${({theme}) => theme.colors.title};
  text-align: center;
  font-weight: 300;
  margin-bottom: 15px;
`;
const Smile = styled(Text)`
  font-size: 24px;
  font-weight: 300;
  color: ${({theme}) => theme.colors.title};
`;

export default Message;
