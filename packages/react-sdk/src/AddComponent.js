import React from 'react';
import { add } from '@siren-sdk/core';

const AddComponent = () => {
    const sum = add(5, 10);
    return <div>The sum is: {sum}</div>;
};

export default AddComponent;
