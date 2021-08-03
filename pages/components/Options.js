import { useState } from 'react';
import Link from 'next/link';

export default function Options({opt, optSub, link, /*handleActive, active*/}) {
  const [active, setActive] = useState(false);

  const handleClick = () => {
    setActive(!active);
  };

  return (
        <div className={opt !== "Profile" ? "uppercase pt-2 text-xl w-full":"uppercase border-b-2 text-xl"}>

         <Link href={`${link}`}>
            <a onClick={handleClick} className={active?"text-red-500": "text-black"}>{opt}</a>
            </Link>
            <p className="text-xs justify-center capitalize">{optSub}</p>
        </div>
  );
};

