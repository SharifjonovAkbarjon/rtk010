import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { useSelector } from "react-redux";

import UniModal from "../modal/Modal";
import { useCreateCarMutation } from "@/redux/api/sclices/productSlice";

const Header = () => {
    const [createCar, { isLoading }] = useCreateCarMutation();

    const onFinish = (e) => {
        e.preventDefault();
        let formData = new FormData(e.target);
        let data = Object.fromEntries(formData.entries());
        data.price = +data.price;
        createCar(data);
        console.log(data);
    };

    const [isFixed, setIsFixed] = useState(false);
    const cart = useSelector((state) => state.cart.value);

    useEffect(() => {
        window.addEventListener("scroll", () => {
            if (window.scrollY > 90) {
                setIsFixed(true);
            } else {
                setIsFixed(false);
            }
        });
    }, []);

    const isLogged = useSelector((state) => state.isLogged.value);

    return (
        <header
            className={`header-wrapper sticky top-0 mx-auto py-4 px-1 xs:px-2 border-b ${
                isFixed ? " " : "z-20  border-b"
            } backdrop-blur-sm z-20`}>
            <div className="wrapper flex justify-between items-center">
                <h2 className="text-2xl">
                    <Link className="text-white" to={"/"}>
                        Logo
                    </Link>
                </h2>
                <div className="links flex items-center justify-center gap-4 text-2xl">
                    <UniModal title={"Create"}>
                        <form
                            onSubmit={onFinish}
                            className="grid grid-cols-2 lg:grid-cols-2 gap-4 bg-neutral-300 shadow-2xl shadow-white p-4 rounded-lg">
                            <input
                                className="border border-black rounded-md py-1 pl-1"
                                type="text"
                                placeholder="Name"
                                name="name"
                            />
                            <input
                                className="border border-black rounded-md py-1 pl-1"
                                type="text"
                                placeholder="Images"
                                name="images"
                            />
                            <input
                                className="border border-black rounded-md py-1 pl-1"
                                type="number"
                                placeholder="Price"
                                name="price"
                            />
                            <input
                                className="border border-black rounded-md py-1 pl-1"
                                type="text"
                                placeholder="Color"
                                name="color"
                            />
                            <input
                                className="border border-black rounded-md py-1 pl-1"
                                type="text"
                                placeholder="Model"
                                name="model"
                            />
                            <textarea
                                className="border border-black rounded-md py-1 pl-1"
                                type="text"
                                name="description"
                                placeholder="Description"
                            />
                            <button className="border bg-black text-white rounded-lg py-1">
                                {isLoading ? "Loading..." : "Submit"}
                            </button>
                        </form>
                    </UniModal>
                    <Link
                        to={"/cart"}
                        className="text-white text-base relative">
                        CART
                        {cart.length > 0 && (
                            <span className="absolute inset-[-.3rem_-.3rem_auto_auto] h-4 w-4 text-[.8rem] rounded-full flex items-center justify-center text-slate-900 bg-green-500">
                                {cart?.length}
                            </span>
                        )}
                    </Link>
                    <Link to={"/wishlist"} className="text-white text-base">
                        WISHLIST
                    </Link>
                    <Link
                        to={"/profile"}
                        className={`${
                            !isLogged && "hidden"
                        } text-white text-base`}>
                        ACCOUNT
                    </Link>
                </div>
            </div>
        </header>
    );
};

export default Header;
