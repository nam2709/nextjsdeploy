import Link from 'next/link';
import fetch from 'isomorphic-unfetch';

const Robots = (props) => {
    return (
        <div>
            <h1>Robots</h1>
            <Link href='/'>
                <button>Home</button>
            </Link>
            <ul>
                {props.robots.map(robot => (
                    <li key={robot.id}>
                        <Link href={`robots/${robot.id}`}>
                            {robot.name}
                        </Link>
                    </li>
                ))}
            </ul>
        </div>
    );
}

Robots.getInitialProps = async function() {
    const res = await fetch('https://shaded-adorable-doll.glitch.me/images');
    const data = await res.json();
    return {
        robots: data
    }
}

export default Robots;
