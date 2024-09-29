import React from 'react';
import avatar from '../assets/avatar.svg';

interface AvatarSVGProps {
  size: string;
  className?: string;
}

const AvatarSVG: React.FC<AvatarSVGProps> = ({ size, className = '' }) => (
  <img
    src={avatar}
    alt="Avatar"
    className={`w-${size} h-${size} ${className}`}
  />
);

const IntroSection: React.FC = () => {
  return (
    <div className="bg-transparent text-white min-h-[83.5vh]" style={{ padding: '5% 10%', fontFamily: 'IBM Plex Mono, monospace' }}>
      <div className="w-full grid min-h-[73.5vh]">
          <span className="flex items-baseline text-3xl sm:text-4xl md:text-5xl lg:text-6xl">
            Hey
          <AvatarSVG size="30" className="inline-block ml-2" />
          </span>
        <p className="tracking-wider text-3xl sm:text-4xl md:text-5xl lg:text-6xl" >
          I am <span className="font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-pink-600" >pulakJain</span>
        </p>
        <p className="tracking-wide text-4xl sm:text-5xl md:text-6xl lg:text-7xl">Your Go → To</p>
        <p className="tracking-wide text-4xl sm:text-5xl md:text-6xl lg:text-7xl">Human Software Eng.</p>
      </div>
    </div>
  );
};

export default IntroSection;



  // return (
  //   <div className="bg-transparent text-white min-h-[90vh] flex items-center justify-center p-4 sm:p-6">
  //     <div className="w-full max-w-5xl flex flex-col min-h-[calc(90vh-2rem)]">
  //       <div className="flex flex-col gap-4 sm:gap-6 md:gap-8 lg:gap-10">
  //         <h1 className="font-bold flex items-baseline text-3xl sm:text-4xl md:text-5xl lg:text-6xl">
  //           Hey <span className="inline-block ml-2"><AvatarSVG size="1em" /></span>
  //         </h1>
  //         <h2 className="font-bold text-3xl sm:text-4xl md:text-5xl lg:text-6xl" style={{ wordSpacing: '0.3em' }}>
  //           I am <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-pink-600">pulakJain</span>
  //         </h2>
  //       </div>
  //       <div className="flex flex-col gap-4 sm:gap-6 md:gap-8 lg:gap-10 mt-8 sm:mt-12 md:mt-16 lg:mt-20">
  //         <p className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl" style={{ wordSpacing: '0.2em' }}>
  //           Your Go → To
  //         </p>
  //         <p className="font-semibold text-4xl sm:text-5xl md:text-6xl lg:text-7xl" style={{ wordSpacing: '0.2em' }}>
  //           Human Software Eng.
  //         </p>
  //       </div>
  //     </div>
  //   </div>
  // );