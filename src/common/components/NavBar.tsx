import tw from 'twin.macro';

const Item = tw.a`ml-2 text-2xl font-bold p-4 text-white cursor-pointer`

const NavBar = () => {
    return (
        <div tw="flex gap-2 bg-blue-400">
            <Item>Example</Item>
            <Item>NavBar</Item>
        </div>
    );
}

export default NavBar;