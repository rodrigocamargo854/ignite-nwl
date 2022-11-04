// interface HomeProps {
//   count: number;
// }

import Image from "next/image";
import appPreviewImg from "../pages/assets/app-nlw-copa-preview.png";
import logoImg from "../pages/assets/logo.svg";
import avatar from "../pages/assets/users-avatar-example.png";
import iconCheckImg from "../pages/assets/icon-check.svg";

export default function Home() {
  return (
    <div className="max-w-[1124px] h-screen mx-auto grid grid-cols-2 gap-20 items-center">
      <main>
        <Image src={logoImg} alt="logo" quality={100} />
        <h1 className="mt-14 text-white text-5xl font-bold leading-tight">
          Crie seu próprio bolão da copa e compartilhe entre amigos!
        </h1>
        <div className="mt-10 flex items-center gap-2">
          <Image src={avatar} alt="avatar" quality={100} />
          <strong className="text-gray-100 text-xl">
            <span className="text-ignite-500">+12.592</span>pessoas já estão
            usando
          </strong>
        </div>

        <form className="mt-10 flex">
          <input
            className="flex-1 px-6 py-4 rounded bg-gray-800 border border-gray-600 text-sn"
            type="text"
            required
            placeholder="qual nome do seu bolão"
          />
          <button
            className="bg-yellow-500 px-6 py-4 rounded text-gray-900 font-bold text-sm uppercase hover:bg-yellow-700"
            type="submit"
          >
            Criar meu bolão
          </button>
        </form>
        <p className="mt-4 text-sm text-gray-300 leading-relaxed">
          Após criar seu bolso, você receberá um código únco que poderá usar
          para convidar
        </p>
        <div className="mt-10 pt-10 border-t border-gray-600 flex justify-between text-gray-100">
          <div className="flex items-center gap-6">
            <Image src={iconCheckImg} alt="" />
            <div className="flex flex-col">
              <span className="font-bold text-2xl">+2.634</span>
              <span>Boloes Criados</span>
            </div>
          </div>
          <div className="flex items-center gap-6">
            <Image src={iconCheckImg} alt="" />
            <div className="flex flex-col">
              <span className="font-bold text-2xl">+2.634</span>
              <span>Boloes Criados</span>
            </div>
          </div>

          <div className="w-px h-full bg-gray-600" />
        </div>
      </main>
      <Image
        src={appPreviewImg}
        alt="dois celulares exibindo previa do projeto"
        quality={100}
      />
    </div>
  );
}

// export const getServerSideProps = async () => {
//   const response = await fetch("http://localhost:3333/pools/count");
//   const data = await response.json();

//   console.log(data);
//   return {
//     props: {
//       count: data.count,
//     },
//   };
// };
