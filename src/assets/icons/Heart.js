import * as React from 'react';
import Svg, {Path} from 'react-native-svg';

const Heart = ({fill = 'none', stroke = '#212227', size = 18, ...props}) => (
  <Svg
    width={size}
    height={size}
    fill={fill}
    viewBox="0 0 18 18"
    xmlns="http://www.w3.org/2000/svg"
    {...props}>
    <Path
      d="M15.63 2.458a4.125 4.125 0 0 0-5.835 0L9 3.253l-.795-.795A4.126 4.126 0 0 0 2.37 8.293l.795.795L9 14.923l5.835-5.835.795-.795a4.125 4.125 0 0 0 0-5.835v0Z"
      stroke={stroke}
      strokeWidth={1.5}
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </Svg>
);

export default Heart;
