import Hero from "@/components/hero/Hero";
import Products from "@/components/products/Products";
import React, { useEffect } from "react";
import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";

const Home = () => {


    return (
        <main>
            <Products />
        </main>
    );
};

export default Home;
