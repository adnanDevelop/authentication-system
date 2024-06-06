import { useDispatch } from "react-redux";
import { login } from "../../redux/feature/authSlice";
import { useNavigate } from "react-router-dom";

const Login = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  return (
    <div className="flex items-center justify-center gap-x-4 h-[50vh]">
      <button
        className="btn btn-primary"
        onClick={() => {
          dispatch(login());
        }}
      >
        Login
      </button>
      <button className="btn btn-primary" onClick={() => navigate("/signup")}>
        Signup
      </button>
    </div>
  );
};

export default Login;
