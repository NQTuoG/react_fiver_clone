import React, { useEffect, useState } from "react";
import { useSearchParams } from "react-router-dom";
import { congViecService } from "../../service/congViec.service";

const DetailJobPage = () => {
  const [searchParams] = useSearchParams(); // Lấy query parameters
  const [jobDetail, setJobDetail] = useState(null);
  const idString = searchParams.get("id");
  const id = idString ? parseInt(idString, 10) : null;

  useEffect(() => {
    const fetchJobDetail = async () => {
      try {
        const res = await congViecService.chiTietCongViec(id);
        setJobDetail(res.data.content);
        console.log(res.data.content);
      } catch (err) {
        console.log(err);
      }
    };
    if (id) fetchJobDetail(); // Gọi API nếu có 'id'
  }, [id]);

  if (!jobDetail) return <div>Loading...</div>;

  return (
    <div className="container mx-auto my-10">
      <div className="flex items-start mb-5">
        <img
          src={jobDetail.hinhAnh}
          alt={jobDetail.tenCongViec}
          className="w-20 h-20 object-cover rounded-lg mr-5"
        />
        <div>
          <h1 className="text-3xl font-bold mb-2">{jobDetail.tenCongViec}</h1>
          <p className="text-lg">{jobDetail.moTaNgan}</p>
        </div>
      </div>
      <div className="bg-gray-100 p-5 rounded-lg shadow-md">
        <p className="text-md mb-3">
          <strong>Describe :</strong> {jobDetail.moTa}
        </p>
        <p className="text-md mb-3">
          <strong>Đánh giá:</strong> {jobDetail.danhGia}
        </p>
        <p className="text-md mb-3">
          <strong>Giá tiền:</strong> ${jobDetail.giaTien}
        </p>
        <p className="text-md mb-3">
          <strong>Sao công việc:</strong> {jobDetail.saoCongViec}{" "}
          <span className="text-yellow-500 text-2xl">★</span>
        </p>
      </div>
    </div>
  );
};

export default DetailJobPage;
