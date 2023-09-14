import Image from "next/image";

export default function Home() {
  return (
    <main className="">
      <div className="container px-6 md:px-10 md:flex md:flex-row md:justify-between">
        <div>
          <div className="flex flex-col md:flex-row pt-[88px] md:pt-10 items-center">
            <Image
              className="mx-auto md:mx-0"
              width={32}
              height={32}
              src="/logo.png"
              alt="logo"
            />
            <p className="mt-3 md:mt-0 md:ms-3 text-black text-center md:text-left">
              PNFT Market
            </p>
          </div>

          <div className="container mt-14">
            <h1 className="text-secondary text-[32px] font-bold">NFT Access</h1>
            <p className="text-accent2 text-sm font-normal mt-2">
              Please fill your detail to access your account.
            </p>
          </div>
          <form>
            <div className="container mt-14">
              <label htmlFor="email" className="text-black text2">
                Email
              </label>
              <div className="mt-2">
                <input
                  required
                  type="text"
                  name="email"
                  id="email"
                  autoComplete="email"
                  placeholder="name@domain.com"
                  className="w-full border-0 rounded-lg text-accent2 ring-inset ring-1 ring-accent1 focus:ring-primary placeholder:text-accent1"
                />
              </div>
            </div>
            <div className="container mt-5">
              <label htmlFor="password" className="text-black text2">
                Password
              </label>
              <div className="mt-2">
                <input
                  required
                  type="password"
                  name="password"
                  id="password"
                  autoComplete="password"
                  security=""
                  placeholder="********"
                  className="w-full border-0 rounded-lg text-accent2 ring-inset ring-1 ring-accent1 focus:ring-primary placeholder:text-accent1"
                />
              </div>
            </div>
            <div className="container mt-5 justify-between flex flex-row items-center">
              <div className="flex flex-row items-center">
                <input
                  type="checkbox"
                  name="remember_me"
                  id="remember_me"
                  className="h-4 w-4 rounded border-accent1 ring-1 focus:ring-primary text-primary"
                />
                <p className="ms-2 text2 text-secondary">Remember me</p>
              </div>
              <a href="/" className="text2 text-primary">
                Forgot Password?
              </a>
            </div>
            <div className="mt-9">
              <button
                type="submit"
                className="rounded-lg text-white bg-primary w-full py-3 focus:ring-primary"
              >
                Sign in
              </button>
            </div>
            <div className="mt-4">
              <button
                type="button"
                className="rounded border-accent1 ring-1 w-full py-[10px] ring-accent1"
              >
                <div className="flex flex-row justify-center">
                  <Image
                    src={"/Google.png"}
                    alt="google logo"
                    width={24}
                    height={24}
                  />
                  <p className="text-black ms-2 text-base">
                    Sign in with Google
                  </p>
                </div>
              </button>
            </div>
          </form>
          <div className="mt-5 flex flex-row justify-center">
            <p className="text-sm text-secondary">
              Don&apos;t have an account? &nbsp;
            </p>
            <a href="/" className="text-sm text-primary">
              Sign up
            </a>
          </div>
          <div className="mt-[63px]"></div>
        </div>
        <div className="hidden md:flex bg-yellow-300  md:visible text-black">
          Right Column
        </div>
      </div>
    </main>
  );
}
