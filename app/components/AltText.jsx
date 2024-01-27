'use client'

import Typed from 'typed.js';
import { useRef, useEffect } from 'react'

export default function AltText() {
  // Create reference to store the DOM element containing the animation
  const el = useRef(null)
  var options = {
    strings: [
      'Comer &#127843;',
      'Saltar &#x1f483;',
      'Dormir &#x1f634;',
      'Naturaleza &#127807; &#x1F343;',
      'Tryhard &#x1F525;'
    ],
    typeSpeed: 100,
    backSpeed: 30,
    backDelay: 1500,
    loop: true,
  }

  useEffect(() => {
    const typed = new Typed(el.current, options)

    return () => {
      // Destroy Typed instance during cleanup to stop animation
      typed.destroy()
    };
  }, []);

  return (
    <p ref={el} className='alt-text' />
  );
}
