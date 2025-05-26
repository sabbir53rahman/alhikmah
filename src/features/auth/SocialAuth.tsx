import { FcGoogle } from "react-icons/fc";

const SocialAuth = () => {
    return <div>
        <button className="lg:max-w-[400px] w-full sm:max-w-[70%] text-xs sm:text-sm bg-white md:px-12 mx-auto p-2 py-3 flex justify-center my-2 items-center rounded-[5px]  border text-slate-700 shadow-lg gap-1 md:gap-5"><FcGoogle className="text-xl"></FcGoogle> গুগল দিয়ে সাইন আপ করুন  </button>
    </div>;
};

export default SocialAuth;
