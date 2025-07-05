import UsernameInput from "@/client_components/username_input";

export default function Home() {

  return (
    <div className="flex flex-col gap-4 h-screen w-screen justify-center items-center">
      <div className="text-7xl">
        Aniwrap
      </div>
      <div className="text-xl italic laquer-regular">
        Find out how much of a degenerate you are
      </div>
      <UsernameInput />
    </div>
  );
}
