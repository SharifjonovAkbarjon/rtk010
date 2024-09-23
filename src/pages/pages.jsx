import React from "react";
import { Routes, Route } from "react-router-dom";
import Home from "./home/Home";
import Layout from "@/components/layout/Layout";
import SignUp from "@/components/signUp/SignUp";
import OTP from "@/components/OTP/OTP";
import SignIn from "@/components/signIn/SignIn";
import Profile from "@/components/profile/Profile";
import ResendOTP from "@/components/resendOTP/ResendOTP";
import NotFound from "@/components/404/notFound";
import Car from "@/components/car/Car";
import CartPage from "./cart/Cart";
import Wishlist from "./wishlist/Wishlist";

const Pages = () => {
    return (
        <div className="bg-black">
            <div className="container max-w-[1300px] mx-auto px-6">
                <Routes>
                    <Route path="/" element={<Layout />}>
                        <Route path="" element={<Home />} />
                        <Route path="profile" element={<Profile />} />
                        <Route path="car" element={<Car />} />
                        <Route path="cart" element={<CartPage />} />
                        <Route path="wishlist" element={<Wishlist />} />
                    </Route>
                    <Route path="/sign-up" element={<SignUp />} />
                    <Route path="/otp" element={<OTP />} />
                    <Route path="/resend-otp" element={<ResendOTP />} />
                    <Route path="/sign-in" element={<SignIn />} />
                    <Route path="*" element={<NotFound />} />
                </Routes>
            </div>
        </div>
    );
};

export default Pages;
