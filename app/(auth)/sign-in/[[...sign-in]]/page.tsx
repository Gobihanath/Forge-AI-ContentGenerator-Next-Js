import { SignIn } from "@clerk/nextjs";

export default function Page() {
  return (
  <div className="flex items-center justify-center h-screen bg-sky-800">
    <div>
      
  <SignIn/>
  </div>
  </div>
  )
  ;
}