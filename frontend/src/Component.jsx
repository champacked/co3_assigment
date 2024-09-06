import { Avatar, AvatarImage, AvatarFallback } from "@/components/ui/avatar";
import { Button } from "@/components/ui/button";

export default function Component() {
  return (
    <div className="flex flex-col items-center bg-black text-white min-h-screen p-4">
      <div className="flex items-center justify-between w-full max-w-md p-4 bg-gray-800 rounded-md">
        <div className="flex items-center space-x-2">
          <Avatar>
            <AvatarImage src="/placeholder-user.jpg" alt="User Avatar" />
            <AvatarFallback>U</AvatarFallback>
          </Avatar>
          <div>
            <p className="font-bold">@innoprenuer</p>
            <p className="text-sm text-gray-400">Captain</p>
          </div>
        </div>
        <Button className="bg-yellow-500 text-black">Connect Wallet</Button>
      </div>
      <div className="flex justify-between w-full max-w-md mt-4 space-x-2">
        <div className="flex flex-col items-center p-2 bg-gray-800 rounded-md">
          <p className="text-xs text-gray-400">Earn per tap</p>
          <p className="text-xl font-bold">1</p>
        </div>
        <div className="flex flex-col items-center p-2 bg-gray-800 rounded-md">
          <p className="text-xs text-gray-400">Coins to level up</p>
          <p className="text-xl font-bold">10000</p>
        </div>
        <div className="flex flex-col items-center p-2 bg-gray-800 rounded-md">
          <p className="text-xs text-gray-400">Profit per hour</p>
          <p className="text-xl font-bold">0</p>
        </div>
      </div>
      <div className="relative flex flex-col items-center mt-8">
        <div className="absolute top-0 w-4/5 h-4/5 bg-gradient-to-r from-gray-700 to-transparent rounded-full" />
        <p className="relative z-10 mt-8 text-lg">Level 1/10</p>
        <p className="relative z-10 mt-1 text-4xl font-bold">68</p>
        <img
          src="/placeholder.svg"
          alt="Astronaut"
          className="relative z-10 mt-4"
          width="200"
          height="300"
          style={{ aspectRatio: "200/300", objectFit: "cover" }}
        />
      </div>
      <div className="flex items-center justify-center w-full max-w-md mt-8 p-2 bg-gray-800 rounded-md">
        <BoltIcon className="text-yellow-500" />
        <p className="ml-2">1000/1000</p>
      </div>
    </div>
  );
}

function BoltIcon(props) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M21 16V8a2 2 0 0 0-1-1.73l-7-4a2 2 0 0 0-2 0l-7 4A2 2 0 0 0 3 8v8a2 2 0 0 0 1 1.73l7 4a2 2 0 0 0 2 0l7-4A2 2 0 0 0 21 16z" />
      <circle cx="12" cy="12" r="4" />
    </svg>
  );
}
