import { ViteReactSSG } from "vite-react-ssg";
import { routes } from "./App";
import "./styles/main.css";

export const createRoot = ViteReactSSG({ routes });
