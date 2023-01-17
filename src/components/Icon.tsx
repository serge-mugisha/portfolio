import React from 'react';
import Icons from './Icons';

const Icon = ({
    name, width, height, color
}) => {
    const SelectedIcon = Icons[name];
    return <SelectedIcon width={width} height={height} color={color} />;
};
export default Icon;
