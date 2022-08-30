import { useDispatch } from "react-redux";
import { AppDispath } from "../redux";

const useTypedDispatch = () => useDispatch<AppDispath>()

export default useTypedDispatch