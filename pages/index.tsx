/* eslint-disable @next/next/no-sync-scripts */
import Image from "next/image";
import styles from "../styles/Home.module.css";
import { Heads } from "./components/Head";
import { Layout } from "./components/Layout";
import Mydashboard from "./Dashboard/Mydashboard";
export default function Home() {
  return (
    <>
      <Mydashboard />
    </>
  );
}
