import { useState } from 'react';
import Link from 'next/link';

export default function Options({opt, optSub}) {
  const [active, setActive] = useState(false);

  const handleClick = () => {
    setActive(!active);
  };

  return (
    <>
        <div><Link className="pl-2 ml-4" href="/"><a>{opt}</a></Link>
            <p className="text-xs justify-center">{optSub}</p>
            </div> 
    </>
  );
};

