import clsx from "clsx"
import type { IconProps } from "./interface"


const ICON_SIZES: Record<string, number> = {
    sm: 16,
    md: 24,
    lg: 32,
}



const Icon = ({
    icon: IconComponent,
    size = 'md',
    className = '',
    isDecorative = false,
    ariaLabel,
    ...props
}: IconProps) => {

  const iconSize = ICON_SIZES[size]
  
  return (
    <IconComponent
    className={clsx(className)}
    width={iconSize}
    height={iconSize}
    aria-Label={isDecorative ? undefined : ariaLabel}
    role={isDecorative ? 'presentation' : 'img'}
    aria-hidden={isDecorative?true:false}
    {...props}
    />
  )
}

export default Icon