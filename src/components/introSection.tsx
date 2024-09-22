import React from 'react';
import avatar from '../assets/avatar.svg';

interface AvatarSVGProps {
  size: string; // Define the type for size
}

const AvatarSVG: React.FC<AvatarSVGProps> = ({ size }) => (
  <img
    src={avatar}
    alt="Avatar"
    className={`w-[${size}] h-[${size}] rounded-full`} // Dynamic size for the avatar
  />
);

const IntroSection: React.FC = () => {
  const heyFontSize = '9vw'; // Decreased font size for "Hey"
  const avatarSize = `calc(${heyFontSize})`; // Avatar size based on "Hey" font size

  return (
    <div
      className="bg-gradient-to-b from-gray-900 to-gray-800 text-white h-[calc(100vh-4rem)] flex align-items-center justify-center"
      style={{ padding: '5vh 10vw' }} // Adds padding of 10vh vertically and 10vw horizontally
    >
      <div className="flex flex-col justify-around h-full w-full">
        <h1 
          className="font-bold flex items-baseline text-[9vw] md:text-[7vw] lg:text-[6vw] w-full" // Adjusted font size
          style={{ wordSpacing: '0.4em' }}  // Increased word spacing for "Hey"
        >
          Hey <span className="inline-block ml-2"><AvatarSVG size={avatarSize} /></span>
        </h1>
        <h2 
          className="font-bold text-[7vw] md:text-[6vw] lg:text-[5vw] w-full" // Adjusted font size
          style={{ wordSpacing: '0.5em' }}  // Increased word spacing for h2
        >
          I am <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-pink-600">pulakJain</span>
        </h2>
        <p 
          className="text-[7vw] md:text-[6vw] lg:text-[5vw] w-full"
          style={{ wordSpacing: '0.3em' }} // Increased word spacing for "Your Go → To"
        >
          Your Go → To
        </p>
        <p 
          className="font-semibold text-[7vw] md:text-[6vw] lg:text-[5vw] w-full"
          style={{ wordSpacing: '0.3em' }}  // Increased word spacing for "Human Software Eng."
        >
          Human Software Eng.
        </p>
      </div>
    </div>
  );
};

export default IntroSection;
