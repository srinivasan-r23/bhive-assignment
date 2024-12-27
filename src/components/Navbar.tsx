import { LOGO_URL } from "../utils/constants";

const Navbar = () => {
  return (
    <nav className="flex lg:px-[120px] lg:py-[25px] py-5 justify-between items-center px-5  bg-white shadow-md lg:shadow-none">
      <a href="/" className="cursor-pointer">
        <img
          src={LOGO_URL}
          alt="Bhive"
          className="h-8 w-[100px] lg:w-[125px] lg:h-10 object-contain"
        />
      </a>
      <div className="border border-[#F2B304] p-[9px] lg:p-[12px] rounded-[4px] shadow-[4px_4px_14px_0px_#0000000F] cursor-pointer">
        <svg
          width="18"
          height="18"
          viewBox="0 0 18 18"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M16.95 18C14.8667 18 12.8083 17.546 10.775 16.638C8.74167 15.73 6.89167 14.4423 5.225 12.775C3.55833 11.1083 2.271 9.25833 1.363 7.225C0.455 5.19167 0.000666667 3.13333 0 1.05C0 0.75 0.0999999 0.5 0.3 0.3C0.5 0.0999999 0.75 0 1.05 0H5.1C5.33333 0 5.54167 0.0793332 5.725 0.238C5.90833 0.396667 6.01667 0.584 6.05 0.8L6.7 4.3C6.73333 4.56667 6.725 4.79167 6.675 4.975C6.625 5.15833 6.53333 5.31667 6.4 5.45L3.975 7.9C4.30833 8.51667 4.704 9.11233 5.162 9.687C5.62 10.2617 6.12433 10.816 6.675 11.35C7.19167 11.8667 7.73333 12.346 8.3 12.788C8.86667 13.23 9.46667 13.634 10.1 14L12.45 11.65C12.6 11.5 12.796 11.3877 13.038 11.313C13.28 11.2383 13.5173 11.2173 13.75 11.25L17.2 11.95C17.4333 12.0167 17.625 12.1377 17.775 12.313C17.925 12.4883 18 12.684 18 12.9V16.95C18 17.25 17.9 17.5 17.7 17.7C17.5 17.9 17.25 18 16.95 18Z"
            fill="#FFBB00"
          />
        </svg>
      </div>
    </nav>
  );
};

export default Navbar;