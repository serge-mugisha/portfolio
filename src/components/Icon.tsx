import React from 'react';
import Icons from './Icons';

interface IconProps {
    name: string;
    width?: number;
    height?: number;
    color?: string;
}

const Icon = ({
    name, width, height, color
}: IconProps) => {
    const SelectedIcon = Icons[name as keyof typeof Icons];
    return <SelectedIcon width={width} height={height} color={color} />;
};
export default Icon;
