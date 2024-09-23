import { useGetCategoriesQuery } from "@/redux/api/sclices/productSlice";
import { changeCategory } from "@/redux/slices/category-slice";
import React from "react";
import { useDispatch } from "react-redux";

const Categories = () => {
    const { data } = useGetCategoriesQuery();
    const dispatch = useDispatch();

    return (
        <div className="categories w-32 flex justify-between items-center mt-5 border">
            <select
                className="bg-transparent w-full border-none outline-none text-sky-100"
                onChange={(e) => {
                    dispatch(changeCategory(e.target.value));
                }}>
                <option className="text-black" value="">
                    All
                </option>
                {data?.payload.map((item) => (
                    <option
                        className="text-black"
                        value={item._id}
                        key={item._id}>
                        {item.name}
                    </option>
                ))}
            </select>
        </div>
    );
};

export default Categories;
