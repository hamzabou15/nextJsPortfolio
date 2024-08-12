import * as React from "react";
import { SVGProps } from "react";

interface SvgComponentProps extends SVGProps<SVGSVGElement> {
  color?: string;
  width?: number;
  height?: number;
}

export const NetIcon = ({
  color = "inherit",
  width = 45,
  height = 45,
  ...props
}: SvgComponentProps) => (
    <svg
    xmlns="http://www.w3.org/2000/svg"
    width={width}
    height={height}
    viewBox="0 0 56 56" // Assurez-vous que cela correspond aux dimensions de base du SVG
    fill="none"
    {...props}
    >
      <path
        fill={color}
        d="M50.75 25.375H28.875v-7H31.5a2.625 2.625 0 0 0 2.625-2.625v-7A2.625 2.625 0 0 0 31.5 6.125h-7a2.625 2.625 0 0 0-2.625 2.625v7a2.625 2.625 0 0 0 2.625 2.625h2.625v7H5.25a.875.875 0 0 0 0 1.75h7.875v8.75H10.5A2.625 2.625 0 0 0 7.875 38.5v7a2.625 2.625 0 0 0 2.625 2.625h7a2.625 2.625 0 0 0 2.625-2.625v-7a2.625 2.625 0 0 0-2.625-2.625h-2.625v-8.75h26.25v8.75H38.5a2.625 2.625 0 0 0-2.625 2.625v7a2.625 2.625 0 0 0 2.625 2.625h7a2.625 2.625 0 0 0 2.625-2.625v-7a2.625 2.625 0 0 0-2.625-2.625h-2.625v-8.75h7.875a.875.875 0 1 0 0-1.75ZM23.625 15.75v-7a.875.875 0 0 1 .875-.875h7a.875.875 0 0 1 .875.875v7a.875.875 0 0 1-.875.875h-7a.875.875 0 0 1-.875-.875Zm-5.25 22.75v7a.875.875 0 0 1-.875.875h-7a.875.875 0 0 1-.875-.875v-7a.875.875 0 0 1 .875-.875h7a.875.875 0 0 1 .875.875Zm28 0v7a.875.875 0 0 1-.875.875h-7a.875.875 0 0 1-.875-.875v-7a.875.875 0 0 1 .875-.875h7a.875.875 0 0 1 .875.875Z"
      />
    </svg>
);
