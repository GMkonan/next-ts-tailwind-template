import tw, { css } from "twin.macro";

const Home = () => {
  return (
    <div tw="flex flex-col items-center justify-center text-xl h-screen w-screen">
      Simple Next + Typescript + Tailwind template
      <p>Using twin.macro + Styled-Components too</p>
      <p css={[`color: #00ff00;`]}>you can style using plain css too, all using twin</p>
      <p>You can use styled components inside twin as well</p>
    </div>
  );
};

export default Home;
