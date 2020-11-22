import React, { useState} from 'react';

import SignIn from "./SignIn";

export default () => {
  const [name, setName] = useName('');
  console.log({ name });

  return <SignIn setName={setName} />;
};
