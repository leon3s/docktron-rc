import React from 'react';

import * as Ui from './Ui';

const TextInput = React.memo(({title, error, type, ...otherProps}) => (
  <Ui.Container
    error={error}
  >
    <Ui.Title>{title}</Ui.Title>
    <Ui.TextInput
      type={type}
      {...otherProps}
    />
    {
      error ?
        <Ui.Error>{error.message}</Ui.Error>
      : null
    }
  </Ui.Container>
));

export default TextInput;
