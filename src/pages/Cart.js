import React, { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import CartItem from "../components/CartItem";

const Cart = () => {
  const productData = useSelector((state) => state.khen.productData);
  const [totalAmt, setTotalAmt] = useState("");
  useEffect(() => {
    let price = 0;
    productData.map((item) => {
      price += item.price * item.quantity;
      return price;
    });
    setTotalAmt(price);
  }, [productData]);
  return (
    <div className="">
      <div className="relative">
        <img
          className="w-full h-60 object-cover"
          src="https://th.bing.com/th/id/R.a8820040825217fff640048afa3be967?rik=Op0U3jxe9Fq9mg&pid=ImgRaw&r=0"
          alt="cartlogo"
        />
        <div className="absolute top-2/4 right-1/2  mx-auto  ">
          <h2 className="text-white text-3xl font-semibold ">Cart Items</h2>
        </div>
      </div>

      <div className="max-w-screen-xl mx-auto py-20 flex ">
        <CartItem />
        <div className="w-1/3 bg-[#fafafa] py-6 px-4 h-fit ">
          <div className="flex flex-col gap-6 border-b-[1px] border-b-gray-400 pb-6 ">
            <h2 className="text-2xl font-medium">Cart totals</h2>
            <p className="flex items-center gap-4 text-base ">
              Discount:{" "}
              <span className="font-titleFont font-bold text-lg">
                $ {(totalAmt / 200).toFixed(2)}
              </span>
            </p>
            <p className="flex items-start gap-4 text-base ">
              Shipping
              <span>
                Lorem ipsum dolor sit, amet consectetur adipisicing elit. Minima
                sed quia sunt natus consequuntur.
              </span>
            </p>
          </div>
          <p className="font-titleFont font-semibold flex justify-between mt-6">
            Total{" "}
            <span className="text-xl font-bold ">
              ${totalAmt - (totalAmt / 90).toFixed(2)}
            </span>
          </p>
          <button
            type="submit"
            className="text-base bg-black text-white w-full py-3 mt-6 hover:bg-gray-800 duration-500">
            {" "}
            Proceed to checkout
          </button>
        </div>
      </div>
    </div>
  );
};

export default Cart;
