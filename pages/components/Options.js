import { useState } from 'react';
import Link from 'next/link';

export default function Options({opt, optSub, link, handleActive, active}) {

  return (
        <div className={opt === "Test Results" ? "uppercase pt-2 text-2xl":"border-b-2 "}>

         <Link href={`${link}`}>
            <a onClick={handleActive} className={active?"text-red-500": "text-gray-500"}>{opt}</a>
            </Link>
            <p className="text-xs justify-center">{optSub}</p>
        </div>
  );
};

