import { Upload } from "antd";
import CreateUser from "../pages/CreateUser/CreateUser";
import { http } from "./config";

export const nguoiDungService = {
  getListUser: () => {
    return http.get("/users");
  },
  // nv 2 tạo hàm xử lí xóa người dùng
  deleteUser: (id) => {
    return http.delete(`/users?id=${id}`);
  },
  createUser: (data) => {
    return http.post("/users", data);
  },
  UploadAvatar: (token, data) => {
    return http.post("/users/upload-avatar", data, {
      headers: {
        token,
      },
    });
  },
};
