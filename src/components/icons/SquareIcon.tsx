import * as React from "react";
import { SVGProps } from "react";

interface SvgComponentProps extends SVGProps<SVGSVGElement> {
  color?: string;
  width?: number;
  height?: number;
}

export const SquareIcon = ({
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
      stroke={color}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={1.67 } // Ajustez la largeur du trait proportionnellement
      d="M18.667 23.333a4.667 4.667 0 0 1 4.666-4.666h21A4.667 4.667 0 0 1 49 23.333v21A4.667 4.667 0 0 1 44.333 49h-21a4.666 4.666 0 0 1-4.666-4.667v-21Z"
    />
    <path
      stroke={color}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={1.67 } // Ajustez la largeur du trait proportionnellement
      d="M37.333 18.667v-7A4.667 4.667 0 0 0 32.667 7h-21A4.667 4.667 0 0 0 7 11.667v21a4.667 4.667 0 0 0 4.667 4.666h7"
    />
  </svg>
);
