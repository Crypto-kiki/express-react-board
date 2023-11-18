import { FC } from "react";

const Main: FC = () => {
  return (
    <>
      <header>헤더</header>
      <main className="max-w-screen-md mx-auto">
        <h1 className="mt-20 text-center font-bold text-2xl">h662's 게시판</h1>
        <ul className="mt-10 h-[440px]">
          <li className="flex justify-between border-b-2 font-semibold">
            <span className="w-2/12 p-2 text-center">아이디</span>
            <span className="w-6/12 p-2 text-center">제목</span>
            <span className="w-2/12 p-2 text-center">사용자</span>
            <span className="w-2/12 p-2 text-center">작성일</span>
          </li>
          <li>포스트 카드</li>
        </ul>
        <ul className="flex text-lg justify-center">
          <li>페이지</li>
        </ul>
      </main>
    </>
  );
};

export default Main;
