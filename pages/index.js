import Link from 'next/link';

const Index = () => {
    return (
        <div>
            <h1>SSR Magician</h1>
            <Link href ='about'>
                <button>About</button>
            </Link>
            <Link href ='Robots'>
                <button>Robots</button>
            </Link>
            {/* <a href="/about"> About </a> */}
        </div>
    );
};

export default Index;
