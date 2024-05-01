"use client";

import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Badge } from "@/components/ui/badge";
import { Separator } from "@radix-ui/react-separator";

export default function Card({ props }) {
  return (
    <div className="max-w-40 min-h-60 bg-red-300 rounded-2xl shadow-lg ring-1 ring-white flex flex-col items-center relative">
      <Avatar>
        <AvatarImage src="https://github.com/shadcn.png" alt="@shadcn" />
        <AvatarFallback>CN</AvatarFallback>
      </Avatar>
      <div className="absolute translate-x-14 translate-y-52">
        <Badge variant={"destructive"}>heart</Badge>
      </div>
      <div className="absolute translate-y-20">{props.name}</div>
      <div className="absolute translate-y-20 bg-white min-w-36 min-h-[1px]"></div>
    </div>
  );
}
