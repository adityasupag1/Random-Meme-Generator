import { useEffect, useState } from "react";
import axios from "axios";
import Spinner from "./Spinner";
import useGif from "../hooks/useGif";

const API_KEY = import.meta.env.VITE_GIPHY_API_KEY;

const Random = () => {

 const {gif, loading, fetchData} = useGif();
	 
	return (
		<div className=" w-1/2 bg-green-500 mx-auto rounded-lg border  border-black flex flex-col items-center gap-y-5 mt-[15px] ">
			<h1 className="mt-[15px] text-2xl font-bold underline uppercase ">
				a Random Gif
			</h1>
			{loading ? (
				<Spinner />
			) : (
				<img className="h-[250px]" src={gif} />
			)}
			<button
				className=" w-11/12 bg-yellow-400 text-lg py-2 rounded-lg mb-5 "
				onClick={ () => {fetchData()}}
			>
				Generate
			</button>
		</div>
	);
};
export default Random;
