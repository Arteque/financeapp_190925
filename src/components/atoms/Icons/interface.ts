import type { IconType } from 'react-icons'

export type IconSize = 'sm' | 'md' | 'lg';

export interface IconProps extends React.SVGProps<SVGSVGElement>{
    icon: IconType;
    size?:IconSize;
    className?:string;
    ariaLabel?:string;
    isDecorative?:boolean;
}