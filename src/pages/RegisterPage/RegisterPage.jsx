import React, { useContext } from "react";
import InputCustom from "../../components/Input/InputCustom";
import { Link, useNavigate } from "react-router-dom";
import { path } from "../../common/path";
import { useFormik } from "formik";
import * as yup from "yup";
import { authService } from "../../service/auth.service";
import { NotificationContext } from "../../App";
import { useDispatch } from "react-redux";
import { getInfoUser } from "../../redux/authSlice";
import useResponsive from "../../hooks/useReponsive";

const RegisterPage = () => {
  const isResponsive = useResponsive({
    mobile: 576,
    tablet: 768,
  });

  const navigate = useNavigate();
  const dispatch = useDispatch();
  const { showNotification } = useContext(NotificationContext);

  const validationSchema = yup.object({
    name: yup.string().required("Vui lòng không bỏ trống tên người dùng"),
    email: yup
      .string()
      .required("Vui lòng không bỏ trống")
      .email("Vui lòng nhập đúng định dạng email"),
    phone: yup
      .string()
      .matches(
        /^[+]?[(]?[0-9]{3}[)]?[-\s.]?[0-9]{3}[-\s.]?[0-9]{4,6}$/,
        "Số điện thoại không hợp lệ"
      )
      .required("Vui lòng không bỏ trống số điện thoại"),
    password: yup
      .string()
      .required("Vui lòng không bỏ trống")
      .min(8, "Vui lòng tối thiểu 8 ký tự")
      .matches(
        /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]+$/,
        "Mật khẩu phải chứa ít nhất một chữ cái viết hoa, một chữ cái viết thường, một số và một ký tự đặc biệt"
      ),
    birthday: yup.date().required("Vui lòng không bỏ trống ngày sinh"),
    gender: yup.string().required("Vui lòng không bỏ trống giới tính"),
  });

  const {
    handleSubmit,
    handleChange,
    values,
    errors,
    touched,
    handleBlur,
    setFieldValue,
  } = useFormik({
    initialValues: {
      name: "",
      email: "",
      phone: "",
      password: "",
      birthday: "",
      gender: "",
      certification: [],
      skill: [],
      role: "user",
    },
    validationSchema,
    onSubmit: (values) => {
      const submitValues = {
        ...values,
        certification: [],
        skill: [],
        role: "user",
      };

      authService
        .signUp(submitValues)
        .then((res) => {
          console.log(res);
          dispatch(getInfoUser(res.data.content));

          showNotification("Đăng ký thành công", "success", 2000);
          setTimeout(() => {
            navigate(path.home);
          }, 1000);
        })
        .catch((err) => {
          console.log(err);
          showNotification(err.response.data.message, "error");
        });
    },
  });

  return (
    <div className="container">
      <div
        className={`registerPage_content ${
          isResponsive.mobile ? "block" : "flex"
        } items-center h-screen`}
      >
        <div
          className={`registerPage_form ${
            isResponsive.mobile ? "w-full" : "w-1/2"
          }`}
        >
          <form className="space-y-5" onSubmit={handleSubmit}>
            <h1 className="text-center text-4xl font-medium uppercase">
              Giao diện đăng ký
            </h1>

            <InputCustom
              name="name"
              onChange={handleChange}
              value={values.name}
              labelContent="Name"
              placeholder="Vui lòng nhập tên người dùng"
              error={errors.name}
              touched={touched.name}
              onBlur={handleBlur}
            />
            <InputCustom
              name="email"
              onChange={handleChange}
              value={values.email}
              labelContent="Email"
              placeholder="Vui lòng nhập email"
              error={errors.email}
              touched={touched.email}
              onBlur={handleBlur}
            />
            <InputCustom
              name="phone"
              onChange={handleChange}
              value={values.phone}
              labelContent="Phone Number"
              placeholder="Vui lòng nhập số điện thoại"
              error={errors.phone}
              touched={touched.phone}
              onBlur={handleBlur}
            />
            <InputCustom
              name="password"
              onChange={handleChange}
              value={values.password}
              placeholder="Vui lòng nhập mật khẩu"
              labelContent="Password"
              typeInput="password"
              error={errors.password}
              touched={touched.password}
              onBlur={handleBlur}
            />
            <InputCustom
              name="birthday"
              onChange={handleChange}
              value={values.birthday}
              placeholder="Vui lòng chọn ngày sinh"
              labelContent="Birthday"
              typeInput="date"
              error={errors.birthday}
              touched={touched.birthday}
              onBlur={handleBlur}
            />

            <div>
              <label>Gender:</label>
              <div>
                <label>
                  <input
                    type="radio"
                    name="gender"
                    value="true"
                    onChange={() => setFieldValue("gender", true)}
                  />
                  Male
                </label>
                <label>
                  <input
                    type="radio"
                    name="gender"
                    value="false"
                    onChange={() => setFieldValue("gender", false)}
                  />
                  Female
                </label>
              </div>
              {touched.gender && errors.gender && (
                <p className="text-danger font-bold">{errors.gender}</p>
              )}
            </div>

            <button
              type="submit"
              className="inline-block w-full bg-black text-white py-2 px-5 rounded-md"
            >
              Register
            </button>
          </form>
          <Link />
        </div>
      </div>
    </div>
  );
};

export default RegisterPage;
