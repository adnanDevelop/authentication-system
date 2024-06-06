import { Link } from "react-router-dom";

const Signup = () => {
  return (
    <div className="flex items-center justify-center h-[50vh]">
      <Link to="/login" className="btn btn-primary">
        Signup
      </Link>
    </div>
  );
};

export default Signup;
