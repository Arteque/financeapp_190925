import type { ButtonHTMLAttributes, AnchorHTMLAttributes, ReactNode } from "react";

export interface BaseLinkProps{
    variant?:"primary" | "secondary" | "tertiary" | "destroy";
    children?: ReactNode;
}

//btn props
export interface ButtonProps extends BaseLinkProps, ButtonHTMLAttributes<HTMLButtonElement>{}
export interface LinkProps extends BaseLinkProps , AnchorHTMLAttributes<HTMLAnchorElement>{
    to:string;
    external?:boolean;
}