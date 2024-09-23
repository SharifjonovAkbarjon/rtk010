import React from "react";
import { useGetProfileQuery } from "@/redux/api/sclices/authSlice";
import { Button } from "antd";
import { useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import { loggedOut } from "@/redux/slices/isLogged";

const Profile = () => {
    let { data } = useGetProfileQuery();
    const dispatch = useDispatch();

    data = data?.payload;
    const navigate = useNavigate();

    const handleLogOut = () => {
        localStorage.clear();
        dispatch(loggedOut());
        navigate("/");
    };

    return (
        <div className="mt-10 max-w-lg mx-auto bg-[#000] shadow-xl border-t shadow-white rounded-lg p-6">
            <div className="flex items-center space-x-4 flex-wrap justify-center gap-4 flex-col sm:flex-row text-center sm:text-left">
                <div>
                    <img
                        src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTi8iQHwikENpOE88m5k87WCv30qbnmaNtW-Q&s"
                        alt="User avatar"
                        className="w-24 h-24 rounded-full object-contain"
                    />
                </div>
                <div>
                    <h2 className="text-2xl text-white font-semibold">
                        Name: {data?.first_name}
                    </h2>
                    <p className="text-gray-400">Email: {data?.email}</p>
                    <p className="text-gray-400">Role: {data?.role}</p>
                </div>
            </div>
            <div className="mt-4 text-center sm:text-left grid gap-3 sm:gap-2">
                <div>
                    <p className="text-gray-400">
                        Created At: {new Date(data?.createdAt).toLocaleString()}
                    </p>
                    <p className="text-gray-400">
                        Updated At: {new Date(data?.updatedAt).toLocaleString()}
                    </p>
                </div>
            </div>
            <Button
                onClick={() => handleLogOut()}
                className="mt-4 hover:text-red-400 hover:border-red-500">
                Log Out
            </Button>
        </div>
    );
};

export default Profile;
