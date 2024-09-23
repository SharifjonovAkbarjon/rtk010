import React, { useEffect, useState } from "react";
import Categories from "../categories/Categories";
import { useGetCarsQuery } from "@/redux/api/sclices/productSlice";
import CardItem from "../card/Card";
import { useSelector } from "react-redux";

const Products = () => {
    let { data } = useGetCarsQuery();
    const category = useSelector((state) => state.category.value);

    const [cars, setCars] = useState();

    useEffect(() => {
        if (category) {
            let filteredData = data?.payload.filter(
                (item) => item.category == category
            );
            setCars(
                <div className="cars mt-10 flex flex-col items-center justify-center sm:grid sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
                    {filteredData.length > 1 ? (
                        filteredData.map((item) => (
                            <CardItem key={item._id} car={item} />
                        ))
                    ) : (
                        <img
                            src="https://image.similarpng.com/very-thumbnail/2020/09/Poor-Man-with-Empty-Pockets-on-transparent-background-PNG.png"
                            className="max-h-80 max-w-80 mx-auto col-span-4 rounded-full"
                        />
                    )}
                </div>
            );
        } else {
            setCars(
                <div className="cars mt-10 flex flex-col items-center justify-center sm:grid sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
                    {data?.payload.map((item) => (
                        <CardItem key={item._id} car={item} />
                    ))}
                </div>
            );
        }
    }, [category]);

    useEffect(() => {
        setCars(
            <div className="cars mt-10 flex flex-col items-center justify-center sm:grid sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
                {data?.payload.map((item) => (
                    <CardItem key={item._id} car={item} />
                ))}
            </div>
        );
    }, [data]);

    return (
        <section className="product-container p-3">
            <div className="wrapper mt-10">
                <div className="info text-center flex items-center justify-center flex-col gap-5">
                    <h2 className="text-4xl text-[#f7ede2]">Your Cars</h2>
                    <p className="max-w-4xl text-sm text-slate-300">
                        Lorem ipsum dolor sit amet consectetur, adipisicing
                        elit. Optio ipsum velit dolore sunt deleniti nisi, quia
                        ad doloribus rem? Minus aliquid esse assumenda aperiam
                        similique unde enim ratione a cumque cupiditate ea
                        beatae odio ut, laboriosam explicabo deserunt atque
                        perferendis.
                    </p>
                </div>
            </div>
            <Categories />
            {cars}
        </section>
    );
};

export default Products;
