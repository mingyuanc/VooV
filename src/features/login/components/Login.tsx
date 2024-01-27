import Image from "next/image";
import { Button } from "@/components/ui/button";
import { useRouter } from "next/navigation";
import ToastBuilder from "@/components/notifications/ToastBuilder";

export default function Login() {
  const router = useRouter();

  return (
    <div className="flex flex-col items-center">
      <Image
        src="/logo.png"
        width={400}
        height={300}
        alt="Picture of the author"
        className="my-[-100px]"
      />
      <Button
        variant="outline"
        className="w-[200px] mb-1"
        onClick={() => {
          router.push("explore");
          ToastBuilder.success("Successfully signed up").send();
        }}
      >
        Login
      </Button>
      <Button
        variant="outline"
        className="w-[200px] mb-1"
        onClick={() => {
          router.push("explore");
          ToastBuilder.success("Successfully registered").send();
        }}
      >
        Sign up
      </Button>
      <ul className="flex items-center justify-center my-4">
        <li className="px-2 hover:scale-125 ease-in-out duration-300">
          <Image
            src="/facebook.svg"
            width={40}
            height={40}
            alt="Picture of the author"
          />
        </li>
        <li className="px-2 hover:scale-125 ease-in-out duration-300">
          <Image
            src="/gmail.svg"
            width={38}
            height={40}
            alt="Picture of the author"
          />
        </li>
        <li className="px-2 hover:scale-125 ease-in-out duration-300">
          <Image
            src="/linkedin.svg"
            width={40}
            height={40}
            alt="Picture of the author"
          />
        </li>
      </ul>
    </div>
  );
}
