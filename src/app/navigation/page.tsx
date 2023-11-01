'use client';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { useState } from 'react';
import styles from './Navigation.module.css';

const Navigation = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const pathName = usePathname();
  return (
    <div className={'mx-auto p-4'}>
      <nav className="p-4 md:flex md:justify-between md:items-center md:gap-20">
        <div className="md:hidden">
          <button
            onClick={() => setMenuOpen(!menuOpen)}
            className="text-gray-800 focus:outline-none"
          >
            <svg
              className="w-6 h-6"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              {menuOpen ? (
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M6 18L18 6M6 6l12 12"
                />
              ) : (
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4 6h16M4 12h16M4 18h16"
                />
              )}
            </svg>
          </button>
        </div>
        <h2 className="header__logo-title">
          Meta<span className="header__title-logo">Blog</span>
        </h2>
        <div className={`md:flex ${menuOpen ? 'block' : 'hidden'}`}>
          <ul className="mt-4 md:mt-0 flex flex-col md:flex-row md:gap-20 items-center">
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
                className={`link ${
                  pathName === '/single-post' ? 'active' : ''
                }`}
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
        </div>
        <label className={styles.headerInput}>
          <input type="text" placeholder={'Search'} />
        </label>
      </nav>
    </div>
  );
};

export default Navigation;
