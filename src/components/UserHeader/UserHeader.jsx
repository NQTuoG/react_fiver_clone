import React from "react";
import Logoicon from "../icon/Logoicon";
import { path } from "../../common/path";
import { Link } from "react-router-dom";
import { useSelector } from "react-redux";
import { Dropdown, Avatar } from "antd";
import UserIcon from "../icon/UserIcon";
import LogoutIcon from "../icon/LogoutIcon";
import FormSeachProduct from "../Form/FormSeachProduct";
import WrapperSuggestJob from "../Wrapper/WrapperSuggestJob";

const UserHeader = () => {
  const items = [
    {
      label: (
        <Link className="flex space-x-2 items-center justify-between">
          {" "}
          <UserIcon /> <span>Thông tin cá nhân</span>
        </Link>
      ),
      key: "0",
    },
    {
      type: "divider",
    },
    {
      label: (
        <Link className="flex space-x-2 items-center justify-between">
          {" "}
          <LogoutIcon /> <span>Đăng xuất</span>
        </Link>
      ),
      key: "1",
    },
  ];
  // useSelector dùng dể lấy dữ liệu từ redux
  const { infoUser } = useSelector((state) => state.authSlice);

  const checkUserLogin = () => {
    return infoUser ? (
      <Dropdown
        menu={{
          items,
        }}
        trigger={["click"]}
      >
        <Avatar className="cursor-pointer hover:bg-orange-500">
          {infoUser.user.name.charAt(0)}
        </Avatar>
      </Dropdown>
    ) : (
      <>
        <Link
          to={path.signIn}
          className="py-2 px-4 rounded-md hover:bg-gray-200 duration-300 "
        >
          Sign In
        </Link>
        <Link
          to={path.signUp}
          className="py-2 px-4 text-green-500 border border-green-500 rounded-md hover:bg-green-500 duration-300 hover:text-white "
        >
          Join
        </Link>
      </>
    );
  };

  return (
    <header className="py-5">
      <div className="container">
        <div className="header_content flex items-center justify-between ">
          <div className="header_logo flex items-center space-x-10">
            <Link to={path.homePage}>
              <Logoicon />
            </Link>
            <WrapperSuggestJob>
              <FormSeachProduct />
            </WrapperSuggestJob>
          </div>
          <nav className="header_navigate space-x-5">{checkUserLogin()}</nav>
        </div>
      </div>
    </header>
  );
};

export default UserHeader;
