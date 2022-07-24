import Link from 'next/link';
import React from 'react';
import Img from 'next/image';
import { BiLineChart } from 'react-icons/bi';
import { GoGitCommit, GoRepo, GoSettings } from 'react-icons/go';
import { NavLink, UserAccount } from './components';

export default function Sidebar(): JSX.Element {
  return (
    <aside className="sticky top-0 flex flex-col items-start w-72 p-10 border-r border-text h-screen">
      <div className="flex flex-row items-center justify-center gap-4">
        <div className="relative w-12 h-12">
          <Img src="/logo.svg" layout="fill" />
        </div>
        <Link href="/" passHref>
          <a className="font-heading text-2xl md:text-3xl">Squares</a>
        </Link>
      </div>
      <nav className="flex flex-col items-start mt-9 pb-4 gap-4 h-full border-b border-text">
        <NavLink text="Dashboard" href="/" icon={<BiLineChart size="20px" />} />
        <NavLink
          text="Repositories"
          href="/repositories"
          icon={<GoRepo size="20px" />}
        />
        <div className="grow">
          <NavLink
            text="Commits"
            href="/commits"
            icon={<GoGitCommit size="25px" />}
          />
        </div>
        <NavLink
          text="Settings"
          href="/settings"
          icon={<GoSettings size="20px" />}
        />
      </nav>
      <UserAccount />
    </aside>
  );
}