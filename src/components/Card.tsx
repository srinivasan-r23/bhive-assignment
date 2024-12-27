import { Location } from "../models/space";
import { BASE_IMAGE_URL } from "../utils/constants";

const Card = (props: { space: Location }) => {
  const data = props?.space;
  const mapUrl = `http://maps.google.com/maps?q=${data?.latitude},${data?.longitude}`;
  const imageUrl = props?.space?.images?.[0]?.split("/");
  const updatedUrl =
    BASE_IMAGE_URL + imageUrl?.[0] + "/images/centers/" + imageUrl?.[1];
  const days = 10;
  const discount = data?.day_pass_discounts_percentage?.[days]?.value ?? 0;
  const totalPrice = (data?.day_pass_price ?? 0) * days * (1 - discount / 100);

  return (
    <div className="transition-all duration-150 hover:shadow-lg cursor-pointer bg-white px-3 pt-4 pb-3 border rounded-lg border-[#EEE7E7] shadow-[0px_2px_4px_0px_#0000000F]">
      <div className="w-full flex">
        <p className="flex-1 text-[#263238] text-xl font-semibold pr-12">
          {data?.name}
        </p>
        <div className="rounded-md border flex flex-col items-center bg-[#F9F9F9] cursor-pointer py-1 mb-2">
          <a
            className="w-[40px] h-[40px] items-center flex flex-col gap-2 pt-1"
            href={mapUrl}
            target="_blank"
          >
            <svg
              width="18"
              height="18"
              viewBox="0 0 18 18"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M9 18C7.75909 18 6.58977 17.7648 5.49205 17.2943C4.39432 16.8239 3.43977 16.183 2.62841 15.3716C1.81705 14.5602 1.17614 13.6057 0.705682 12.508C0.235227 11.4102 0 10.2409 0 9C0 7.74545 0.235227 6.57273 0.705682 5.48182C1.17614 4.39091 1.81705 3.43977 2.62841 2.62841C3.43977 1.81705 4.39432 1.17614 5.49205 0.705682C6.58977 0.235227 7.75909 0 9 0C10.2545 0 11.4273 0.235227 12.5182 0.705682C13.6091 1.17614 14.5602 1.81705 15.3716 2.62841C16.183 3.43977 16.8239 4.39091 17.2943 5.48182C17.7648 6.57273 18 7.74545 18 9C18 10.2409 17.7648 11.4102 17.2943 12.508C16.8239 13.6057 16.183 14.5602 15.3716 15.3716C14.5602 16.183 13.6091 16.8239 12.5182 17.2943C11.4273 17.7648 10.2545 18 9 18ZM8.48864 15.3614C8.625 15.4977 8.78182 15.5659 8.95909 15.5659C9.13636 15.5659 9.29318 15.4977 9.42955 15.3614L15.3205 9.47045C15.4568 9.33409 15.525 9.17045 15.525 8.97955C15.525 8.78864 15.4568 8.625 15.3205 8.48864L9.42955 2.59773C9.29318 2.46136 9.13636 2.39318 8.95909 2.39318C8.78182 2.39318 8.625 2.46136 8.48864 2.59773L2.59773 8.48864C2.46136 8.625 2.39318 8.78864 2.39318 8.97955C2.39318 9.17045 2.46136 9.33409 2.59773 9.47045L8.48864 15.3614ZM5.70682 11.4341V8.16136C5.70682 7.91591 5.78182 7.71818 5.93182 7.56818C6.08182 7.41818 6.27955 7.34318 6.525 7.34318H9.92045L9.06136 6.44318L10.2068 5.29773L13.0705 8.16136L10.2068 11.025L9.06136 9.87955L9.92045 8.97955H7.34318V11.4341H5.70682ZM9 16.3636C11.0591 16.3636 12.8011 15.6511 14.2261 14.2261C15.6511 12.8011 16.3636 11.0591 16.3636 9C16.3636 6.94091 15.6511 5.19886 14.2261 3.77386C12.8011 2.34886 11.0591 1.63636 9 1.63636C6.94091 1.63636 5.19886 2.34886 3.77386 3.77386C2.34886 5.19886 1.63636 6.94091 1.63636 9C1.63636 11.0591 2.34886 12.8011 3.77386 14.2261C5.19886 15.6511 6.94091 16.3636 9 16.3636Z"
                fill="#1C1B1F"
              />
            </svg>
            <span className="text-[#263238] font-medium text-[8px] opacity-50 text-nowrap">
              6 Kms
            </span>
          </a>
        </div>
      </div>
      <div className="overflow-hidden rounded-md h-[202px]">
        <img
          src={updatedUrl}
          alt={data?.name}
          className="h-full w-full object-cover transition-transform duration-300 hover:scale-110"
        />
      </div>
      <div className="flex items-center mt-[22px] gap-3">
        <button
          type="button"
          className="bg-[#F9F9F9] py-2 px-3 text-sm border-[0.5px] rounded-md flex-1 hover:scale-105 hover:shadow-md transition-all duration-150"
        >
          <div className="flex justify-between items-center ">
            <div>
              <p>Day Pass</p>
              <p className="font-semibold text-xl text-[#263238] pt-2 text-nowrap">
                ₹ {data?.day_pass_price}
                <span className="font-medium text-xs opacity-80 text-nowrap">
                  / Day
                </span>
              </p>
            </div>
            <svg
              width="21"
              height="12"
              viewBox="0 0 21 12"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                opacity="0.6"
                fillRule="evenodd"
                clipRule="evenodd"
                d="M13.7071 5.29289C14.0976 5.68342 14.0976 6.31658 13.7071 6.70711L8.70711 11.7071C8.31658 12.0976 7.68342 12.0976 7.29289 11.7071C6.90237 11.3166 6.90237 10.6834 7.29289 10.2929L11.5858 6L7.29289 1.70711C6.90237 1.31658 6.90237 0.683417 7.29289 0.292893C7.68342 -0.0976314 8.31658 -0.0976313 8.70711 0.292893L13.7071 5.29289Z"
                fill="#263238"
              />
              <path
                opacity="0.4"
                fillRule="evenodd"
                clipRule="evenodd"
                d="M6.70711 5.29289C7.09763 5.68342 7.09763 6.31658 6.70711 6.70711L1.70711 11.7071C1.31658 12.0976 0.683417 12.0976 0.292893 11.7071C-0.0976315 11.3166 -0.0976314 10.6834 0.292893 10.2929L4.58579 6L0.292893 1.70711C-0.097631 1.31658 -0.097631 0.683417 0.292893 0.292893C0.683417 -0.0976314 1.31658 -0.0976313 1.70711 0.292893L6.70711 5.29289Z"
                fill="#263238"
              />
              <path
                fillRule="evenodd"
                clipRule="evenodd"
                d="M20.7071 5.29289C21.0976 5.68342 21.0976 6.31658 20.7071 6.70711L15.7071 11.7071C15.3166 12.0976 14.6834 12.0976 14.2929 11.7071C13.9024 11.3166 13.9024 10.6834 14.2929 10.2929L18.5858 6L14.2929 1.70711C13.9024 1.31658 13.9024 0.683417 14.2929 0.292893C14.6834 -0.0976314 15.3166 -0.0976313 15.7071 0.292893L20.7071 5.29289Z"
                fill="#263238"
              />
            </svg>
          </div>
        </button>
        <button
          type="button"
          className="bg-[#FFCF4B] border-[#FFC422] hover:scale-105 hover:shadow-md transition-all duration-150 py-[9px] px-3 text-sm border-[0.5px] rounded-md flex-1 relative"
        >
          <p className="absolute left-1/3 -top-3 text-[8px] bg-[#263238] border border-[#263238] rounded-[3px]  px-3 text-nowrap text-[#FFFDF7]">
            {discount}% Discount
          </p>
          <div className="flex justify-between items-center ">
            <div>
              <p className="text-[#65624C]">Bulk Pass</p>
              <p className="font-semibold text-xl text-[#263238] pt-2 text-nowrap">
                ₹ {totalPrice}
                <span className="font-medium text-xs opacity-80 text-nowrap">
                  / 10 Days
                </span>
              </p>
            </div>
            <svg
              width="21"
              height="12"
              viewBox="0 0 21 12"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                opacity="0.6"
                fillRule="evenodd"
                clipRule="evenodd"
                d="M13.7071 5.29289C14.0976 5.68342 14.0976 6.31658 13.7071 6.70711L8.70711 11.7071C8.31658 12.0976 7.68342 12.0976 7.29289 11.7071C6.90237 11.3166 6.90237 10.6834 7.29289 10.2929L11.5858 6L7.29289 1.70711C6.90237 1.31658 6.90237 0.683417 7.29289 0.292893C7.68342 -0.0976314 8.31658 -0.0976313 8.70711 0.292893L13.7071 5.29289Z"
                fill="#263238"
              />
              <path
                opacity="0.4"
                fillRule="evenodd"
                clipRule="evenodd"
                d="M6.70711 5.29289C7.09763 5.68342 7.09763 6.31658 6.70711 6.70711L1.70711 11.7071C1.31658 12.0976 0.683417 12.0976 0.292893 11.7071C-0.0976315 11.3166 -0.0976314 10.6834 0.292893 10.2929L4.58579 6L0.292893 1.70711C-0.097631 1.31658 -0.097631 0.683417 0.292893 0.292893C0.683417 -0.0976314 1.31658 -0.0976313 1.70711 0.292893L6.70711 5.29289Z"
                fill="#263238"
              />
              <path
                fillRule="evenodd"
                clipRule="evenodd"
                d="M20.7071 5.29289C21.0976 5.68342 21.0976 6.31658 20.7071 6.70711L15.7071 11.7071C15.3166 12.0976 14.6834 12.0976 14.2929 11.7071C13.9024 11.3166 13.9024 10.6834 14.2929 10.2929L18.5858 6L14.2929 1.70711C13.9024 1.31658 13.9024 0.683417 14.2929 0.292893C14.6834 -0.0976314 15.3166 -0.0976313 15.7071 0.292893L20.7071 5.29289Z"
                fill="#263238"
              />
            </svg>
          </div>
        </button>
      </div>
    </div>
  );
};

export default Card;
