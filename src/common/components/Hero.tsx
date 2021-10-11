import tw, { css } from "twin.macro";

const Hero = () => {
    return(
      <div tw="flex flex-col items-center justify-center text-xl mt-12">
        Simple Next + Typescript + Tailwind template
        <p>Using twin.macro + Styled-Components too</p>
        <p css={[`color: #0000ff;`]}>you can style using plain css too, all using twin</p>
        <p>You can use styled components inside twin as well</p>
      </div>
    );
}

export default Hero;