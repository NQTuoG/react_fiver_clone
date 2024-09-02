import { http } from "./config";

export const congViecService = {
  layCongViecTheoTen: (data) => {
    return http.get(`/cong-viec/lay-danh-sach-cong-viec-theo-ten/${data}`);
  },
  chiTietCongViec: (data) => {
    return http.get(`/cong-viec/${data}`);
  },
  layDanhSachCongViec: () => {
    return http.get("/cong-viec");
  },
};
