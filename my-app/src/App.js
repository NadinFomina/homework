import Slider from './slider';
import { Fragment } from 'react';

const slides=[
  {
      img: 'https://www.w3schools.com/howto/img_nature_wide.jpg',
      text: 'Caption Text 1'
  },
  {
      img: 'https://www.w3schools.com/howto/img_snow_wide.jpg',
      text: 'Caption Text 2'
  },
  {
      img: 'https://www.w3schools.com/howto/img_mountains_wide.jpg',
      text: 'Caption Text 3'
  },
];


export default function App() {
  return (
<Fragment>
  <Slider
   slides={slides}
   loop={true}
   navs={true}
   pags={true}
   auto={true}
   stopMouseHover={true}
   delay={3}
   />

</Fragment>

    

  );
}


