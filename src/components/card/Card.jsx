import React, { useState } from "react";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";
import CardActionArea from "@mui/material/CardActionArea";
import { useNavigate } from "react-router-dom";
import { FaRegHeart, FaHeart } from "react-icons/fa";
import { FiShoppingCart } from "react-icons/fi";
import { useDispatch, useSelector } from "react-redux";
import { add } from "@/redux/slices/cart-slice";
import UniModal from "../modal/Modal";
import { Form, Input, InputNumber, Button } from "antd";
import { useUpdateCarMutation } from "@/redux/api/sclices/productSlice";

export default function CardItem({ car }) {
    const [updateCar] = useUpdateCarMutation();
    const cart = useSelector((state) => state.cart.value);
    const [valid, setValid] = useState(true);

    const [form] = Form.useForm();

    const onFinish = (values) => {
        updateCar({ id: car._id, body: values });
        console.log("Submitted Values:", values);
    };

    const navigate = useNavigate();
    const dispatch = useDispatch();

    return (
        <Card
            sx={{ maxWidth: 345 }}
            className="bg-black flex-1 hover:scale-[1.02]">
            <CardActionArea className="h-full flex flex-col justify-between items-center">
                <CardMedia
                    onClick={() => navigate(`/car?id=${car._id}`)}
                    component="img"
                    className="h-36 bg-white"
                    onError={() => setValid(false)}
                    image={
                        valid
                            ? car?.thumbnail
                            : "https://www.svgheart.com/wp-content/uploads/2020/05/car-free-svg-cut-file-1.png"
                    }
                    alt="green iguana"
                />
                <CardContent className="w-full">
                    <Typography
                        className="text-white"
                        gutterBottom
                        variant="h5"
                        component="div">
                        {car?.name}
                    </Typography>
                    <p
                        className="text-sm line-clamp-4 text-white"
                        dangerouslySetInnerHTML={{
                            __html: car?.description,
                        }}></p>
                    <div className="flex items-center gap-3 h-8 mt-2">
                        <span
                            onClick={() => dispatch(add(car))}
                            className={`active:scale-125 text-sm flex items-center justify-center gap-2 rounded-lg text-[#fff] bg-[#3BB77E11]  text-[1rem]  duration-200`}>
                            {cart.some((x) => x._id == car?._id) ? (
                                <span>Remove</span>
                            ) : (
                                <FiShoppingCart />
                            )}
                        </span>
                        <UniModal title={"Edit"}>
                            <Form
                                form={form}
                                layout="vertical"
                                onFinish={onFinish}
                                className="bg-slate-200 p-4 rounded-lg"
                                initialValues={{
                                    name: car.name,
                                    seats: car.seats,
                                }}>
                                <Form.Item
                                    label="Name"
                                    name="name"
                                    rules={[
                                        {
                                            required: true,
                                            message:
                                                "Please enter the car name",
                                        },
                                    ]}>
                                    <Input placeholder="Enter car name" />
                                </Form.Item>

                                <Form.Item
                                    label="Seats"
                                    name="seats"
                                    rules={[
                                        {
                                            required: true,
                                            message:
                                                "Please enter the number of seats",
                                        },
                                    ]}>
                                    <InputNumber
                                        min={1}
                                        max={8}
                                        style={{ width: "100%" }}
                                        placeholder="Enter number of seats"
                                    />
                                </Form.Item>

                                <Form.Item>
                                    <Button type="primary" htmlType="submit">
                                        Submit
                                    </Button>
                                </Form.Item>
                            </Form>
                        </UniModal>
                        <span
                            onClick={() =>
                                dispatch({ type: "TOGGLE_WISHLIST_ITEM", car })
                            }
                            className="hover:text-blue-600 text-white active:scale-125">
                            <FaRegHeart />
                        </span>
                    </div>
                </CardContent>
            </CardActionArea>
        </Card>
    );
}
