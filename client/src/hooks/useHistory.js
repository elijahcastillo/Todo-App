import { useNavigate } from "react-router-dom";

const useHistory = () => {
  // ...

  const navigate = useNavigate();

  // ...

  if (window.history.state && window.history.state.idx > 0) {
    navigate(-1);
  } else {
    navigate("/home/all", { replace: true }); // the current entry in the history stack will be replaced with the new one with { replace: true }
  }
};

export default useHistory;
