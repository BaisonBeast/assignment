import { RiNotification2Line } from "react-icons/ri";

export default function Home() {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-custom-gradient text-white relative">
      <main className="flex flex-col items-center w-full max-w-md text-center p-4">
        <h1 className="text-xl mt-8">Hola!</h1>
        <div className="relative flex justify-center items-center my-[140px] w-full h-64">
          <div className="circle circle-4"></div>
          <div className="circle circle-3"></div>
          <div className="circle circle-2"></div>
          <div className="circle circle-1"></div>
          <div className="w-32 h-32 bg-white bg-opacity-10 rounded-full flex justify-center items-center relative z-10">
            <RiNotification2Line className="w-1/2 h-1/2 text-white" />
          </div>
        </div>
        <h2 className="text-2xl mb-4">Lorem Ipsum...</h2>
        <p className="text-base mb-8">Lorem ipsum dolor sit amet.</p>
        <button className="w-8/12 px-6 py-2 border-2 border-purple-400 rounded-lg text-white hover:bg-purple-600 transition">
          Send Notification
        </button>
      </main>
    </div>
  );
}
