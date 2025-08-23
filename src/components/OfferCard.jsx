import React from "react";
import { FiArrowRight, FiShare2 } from "react-icons/fi";

const OfferCard = ({
  brand = "xfinity",
  category = "Medical",
  title = "Get 10% Cashback on Xfinity Restaurant.",
  expires = "Till: 25th Jun'22",
  logo = null,             // pass an <img/> or icon if you have one
  onKnowMore = () => {},
  onShare = () => {},
}) => {
  return (
    <div className="rounded-xl bg-white shadow-[0_10px_30px_rgba(0,0,0,0.06)] hover:shadow-[0_16px_40px_rgba(0,0,0,0.10)] transition-shadow p-6 md:p-7 w-full">
      {/* Top row */}
      <div className="flex items-center justify-between">
        <div className="flex items-center gap-2 text-2xl font-semibold text-gray-400">
          {logo ? logo : <span className="tracking-wide">{brand}</span>}
        </div>
        <div className="text-sm text-gray-400">{expires}</div>
      </div>

      {/* Category + rule */}
      <div className="mt-5 flex items-center gap-3">
        <span className="text-[15px] font-semibold text-[#d61f69]">{category}</span>
        <span className="h-[2px] w-16 bg-gray-200" />
      </div>

      {/* Title */}
      <h3 className="mt-3 text-xl md:text-2xl font-semibold leading-snug text-gray-800">
        {title}
      </h3>

      {/* Actions */}
      <div className="mt-8 flex items-center justify-between text-sm">
        <button
          onClick={onKnowMore}
          className="group inline-flex items-center gap-2 font-medium text-gray-900 hover:text-[#d61f69] transition-colors"
        >
          <FiArrowRight className="transform transition-transform group-hover:translate-x-0.5" />
          Know More
        </button>

        <button
          onClick={onShare}
          className="inline-flex items-center gap-2 text-gray-500 hover:text-gray-700 transition-colors"
        >
          <FiShare2 />
          Share
        </button>
      </div>
    </div>
  );
};

export default OfferCard;
