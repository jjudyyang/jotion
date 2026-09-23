import Image from "next/image";

export const Logo = () => {
  return (
    <div className="hidden md:flex items-center gap-x-2">
      <Image
        src="/jotion-logo.png"
        width={40}
        height={40}
        alt=""
        className="object-contain"
      />
      <p className="font-semibold">Jotion</p>
    </div>
  );
};
