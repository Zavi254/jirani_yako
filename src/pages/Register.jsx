import { Link } from "react-router-dom";
import { useForm } from "react-hook-form";

const Register = () => {
  const { register, handleSubmit } = useForm();
  const onSubmit = (data) => console.log(data);

  return (
    <section className="login_section p-lg-5 d-lg-flex flex-lg-row flex-lg-row-reverse">
      <div className="col-lg-6 desktop_image_section">
        <img
          src="https://res.cloudinary.com/dogmqg8to/image/upload/v1691483354/europeana-5TK1F5VfdIk-unsplash_u8jhzr.jpg"
          className="desktop_image"
        />
      </div>

      <img
        src="https://res.cloudinary.com/dogmqg8to/image/upload/w_1000,ar_16:9,c_fill,g_auto,e_sharpen/v1691483354/europeana-5TK1F5VfdIk-unsplash_u8jhzr.jpg"
        className="mobile_image img-fluid"
      />

      <div className="col-lg-6 form_section p-lg-5 d-lg-flex flex-column justify-content-center p-3">
        <h2 id="welcome_back">
          Welcome to Jirani Yako{" "}
          <span>
            <img
              src="https://res.cloudinary.com/dogmqg8to/image/upload/v1675211691/Hakika%20Ecommerce/wave_uk2quo.png"
              width={50}
            />
          </span>
        </h2>

        <p className="sign_up_text">Register to Continue</p>
        <form className="sign_in_form" onSubmit={handleSubmit(onSubmit)}>
          <label htmlFor="email">Username</label> <br />
          <input
            type="text"
            name="username"
            id="username"
            className="p-2"
            placeholder="Enter username"
            {...register("username")}
          />
          <br />
          <label htmlFor="email">Email</label> <br />
          <input
            type="email"
            name="email"
            id="email"
            className="p-2"
            placeholder="Example@email.com"
            {...register("email")}
          />
          <br />
          <label htmlFor="password">Password</label>
          <br />
          <input
            type="password"
            name="password"
            id="password"
            className="p-2"
            placeholder="At least 8 characters"
            {...register("password")}
          />
          <button type="submit" className="w-100  mt-2">
            Sign up
          </button>
        </form>
        <div className="d-flex justify-content-center align-items-center">
          <div className="sign_in_border"></div>
          <p className="sign_in_text">Or sign up with</p>
          <div className="sign_in_border"></div>
        </div>
        <div className="third_party_login d-lg-flex flex-lg-column mb-2">
          <button className="mt-3 mb-3 d-flex justify-content-around">
            <span>
              <img
                width={24}
                src="https://res.cloudinary.com/dogmqg8to/image/upload/v1675203177/Hakika%20Ecommerce/google_1_wbwham.png"
              />
            </span>
            <span className="w-50">
              <span className="sign_hide_mobile">Sign up with </span>Google
            </span>
          </button>
          <button className="mt-3 mb-3 d-flex justify-content-around">
            <span>
              <img
                width={24}
                src="https://res.cloudinary.com/dogmqg8to/image/upload/v1691570696/icons8-facebook-48_w3tdth.png"
              />
            </span>
            <span className="w-50">
              <span className="sign_hide_mobile">Sign up with </span>Facebook
            </span>
          </button>
        </div>
        <p className="text-center sign_up_text">
          Already have an account? <Link to={"/login"}>Login</Link>
        </p>
        <p className="text-center footer_text">© 2023 ALL RIGHTS RESERVED</p>
      </div>
    </section>
  );
};

export default Register;
