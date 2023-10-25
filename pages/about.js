import Link from 'next/link';
import Image from '../components/image'

const About = () => {
    return (
        <div>
            <h1>About</h1>
            <Link href='/'>
                <button>Back</button>
            </Link>
            <Image />
            <p> i was a Magician</p>
        </div>
    );
};

export default About;

