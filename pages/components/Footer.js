import Link from 'next/link';
import { useState } from 'react';

export default function Footer() {
  const [active, setActive] = useState(false);

  const handleClick = () => {
    setActive(!active);
  };

  return (
    <>
      <div className="mt-6 p-4 w-auto shadow-md bg-white rounded-lg h-auto font-bold tracking-loose border-t-2">
        <div className="text-3xl font-bold font-roboto p-2 flex justify-center text-purple-700">
          <Link href="/"><a>HelpDefeatCorona.org</a></Link>
        </div>
        
        </div>
        
    </>
  );
};

