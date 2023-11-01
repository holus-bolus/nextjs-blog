"use client";
import Link from 'next/link';
import {usePathname} from "next/navigation";


const Navigation = () => {
    const pathName = usePathname();
    return (
        <nav className="p-4">
            <ul className="flex justify-between items-center">
                <li>
                    <Link
                        className={`link ${pathName === '/' ? 'active' : ''}`}
                        href={'/'}
                    >
                        Home
                    </Link>
                </li>
                <li>
                    <Link
                        className={`link ${pathName === '/blog' ? 'active' : ''}`}
                        href={'/blog'}
                    >
                        Blog
                    </Link>
                </li>
                <li>
                    <Link
                        className={`link ${pathName === '/single-post' ? 'active' : ''}`}
                        href={'/single-post'}
                    >
                        Single post
                    </Link>
                </li>
                <li>
                    <Link
                        className={`link ${pathName === '/pages' ? 'active' : ''}`}
                        href={'/pages'}
                    >
                        Pages
                    </Link>
                </li>
                <li>
                    <Link
                        className={`link ${pathName === '/contact' ? 'active' : ''}`}
                        href={'/contact'}
                    >
                        Contact
                    </Link>
                </li>
            </ul>
        </nav>
    );
};

export default Navigation;
