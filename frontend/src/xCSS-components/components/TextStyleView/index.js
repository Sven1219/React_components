import React from 'react';

import TextPanel from './text-panel';
import FontSizePanel from './fontSize-panel';
import FontColorPanel from './fontColor-panel';
import FontWeightPanel from './fontWeight-panel';

export default function TextStyleBox(){
    return <>
        <h1 >Text Style Box</h1> 
        <TextPanel />
        <FontSizePanel />
        <FontColorPanel />
        <FontWeightPanel />
    </>
}