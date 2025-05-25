// @flow strict
import { personalData } from '@/utils/data/personal-data';
import Link from 'next/link';
import { IoLogoGithub } from "react-icons/io";
import { MdAlternateEmail } from "react-icons/md";

function ContactSection() {
  return (
    <div id="contact" className="my-12 lg:my-16 relative mt-24 text-white">
      <div className="hidden lg:flex flex-col items-center absolute top-24 -right-8">
        <span className="bg-[#1a1443] w-fit text-white rotate-90 p-2 px-5 text-xl rounded-md">
          CONTACT
        </span>
        <span className="h-36 w-[2px] bg-[#1a1443]"></span>
      </div>
      <div className="flex flex-col items-center justify-center gap-8 p-8">
        {/* Removed 'get in touch' heading */}
        {/* Removed redundant description */}
        
        <div className="flex flex-row gap-8 mt-6 justify-center">
          <Link target="_blank" href="https://discord.com/users/696217160007155812">
            <div className="flex flex-col items-center gap-2">
              <div className="bg-[#8b98a5] p-3 rounded-full hover:bg-[#16f2b3] hover:scale-110 transition-all duration-300 text-gray-800 cursor-pointer">
                <MdAlternateEmail size={48} />
              </div>
              <span className="text-lg">discord</span>
            </div>
          </Link>
          
          <Link target="_blank" href={personalData.github}>
            <div className="flex flex-col items-center gap-2">
              <div className="bg-[#8b98a5] p-3 rounded-full hover:bg-[#16f2b3] hover:scale-110 transition-all duration-300 text-gray-800 cursor-pointer">
                <IoLogoGithub size={48} />
              </div>
              <span className="text-lg">github</span>
            </div>
          </Link>
        </div>
        
        <p className="text-sm mt-8 text-gray-400">{personalData.email}</p>
      </div>
    </div>
  );
};

export default ContactSection;