import {
  Card,
  CardHeader,
  CardBody,
  CardFooter,
  Typography,
  Button,
} from "@material-tailwind/react";
import React, { useState } from "react";
import { IconHeart } from "@tabler/icons-react";
import { Carousel } from "@material-tailwind/react";
import { IconStar } from "@tabler/icons-react";

const CardDefault = (props) => {
  const [liked, setLiked] = useState(false);
  return (
    <Card className=" w-full h-full flex justify-center items-center shadow-none gap-3 ">
      <CardHeader className="relative w-[320px] h-[300px] shadow-none">
        <Carousel
          navigation={({ setActiveIndex, activeIndex, length }) => (
            <div className="absolute bottom-4 left-2/4 z-50 flex -translate-x-2/4 gap-2">
              {new Array(length).fill("").map((_, i) => (
                <span
                  key={i}
                  className={`block h-[6px] cursor-pointer rounded-full transition-all content-[''] w-[6px] ${
                    activeIndex === i ? "bg-white" : "bg-white/50"
                  }`}
                  onClick={() => setActiveIndex(i)}
                />
              ))}
            </div>
          )}
          className="rounded-xl"
        >
          <img
            src="https://images.unsplash.com/photo-1540553016722-983e48a2cd10?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=800&q=80"
            alt="card-image"
            className="object-cover object-center w-full h-full"
          />
          <img
            src="https://images.unsplash.com/photo-1540553016722-983e48a2cd10?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=800&q=80"
            alt="card-image"
            className="object-cover object-center w-full h-full"
          />
          <img
            src="https://images.unsplash.com/photo-1540553016722-983e48a2cd10?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=800&q=80"
            alt="card-image"
            className="object-cover object-center w-full h-full"
          />
        </Carousel>
        <IconHeart
          onClick={() => setLiked(!liked)}
          stroke={1}
          className="absolute right-3 cursor-pointer top-3 w-8 h-8 text-white"
          fill={liked ? "#ff0000" : "#00000040"}
        />
        <div className="w-40 h-6 bg-white absolute left-3 top-3 shadow-sm rounded-full text-black flex justify-center items-center text-sm font-semibold">
          Guest favorite
        </div>
      </CardHeader>
      <CardBody className="p-0 w-full ">
        <Typography
          variant="h5"
          className="text-black text-lg font-semibold flex items-center justify-between"
        >
          <span>{props.place}</span>
          <div className="flex items-center justify-center gap-1">
            <IconStar className="w-4 h-4" fill="#000000" />
            <span className=" flex justify-center items-center font-medium text-base">
              {props.stars}
            </span>
          </div>
        </Typography>
        <Typography className="text-black/50 text-base flex flex-col w-full items-start">
          <span>{props.distance}</span>
          <span>{props.data}</span>
        </Typography>
        <Typography className="w-full flex items-end gap-1">
          <span className="font-bold text-lg">{props.price}</span>
          <span className="font-light text-base">{props.duration}</span>
        </Typography>
      </CardBody>
    </Card>
  );
};

export default CardDefault;
