import { http } from "./config";

export const nguoiDungService = {
  getListUser: () => {
    return http.get("/users");
  },
  // nv 2 tạo hàm xử lí xóa người dùng
  deleteUser: (id) => {
    return http.delete(`/users?id=${id}`);
  },
};
