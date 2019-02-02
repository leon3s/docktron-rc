import Styled from 'styled-components/native';

import Text from '~/components/Text';
import TextError from '~/components/TextError';

export const Container = Styled.View`
  width: 100%;
  height: 100%;
  margin-bottom: 10px;
  border-bottom-width: 1px;
`;

export const Title = Styled(Text)`
  margin-bottom: 4px;
`;

export const TextInput = Styled.TextInput`
  color: black;
  padding-vertical: 10px;
  font-size: 10px;
`;

export const Error = Styled(TextError)`
  margin-bottom: 4px;
`;
