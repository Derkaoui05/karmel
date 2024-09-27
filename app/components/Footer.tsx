import Link from "next/link";

interface FooterItemProps {
  id: number;
  text: string;
  link: string;
}

const FooterItem: React.FC<FooterItemProps> = ({ text, link }) => {
  return (
    <li>
      <Link
        href={link}
        className="duration-200 hover:text-red-600 dark:hover:text-red-500"
      >
        {text}
      </Link>
    </li>
  );
};

interface FooterBlockItemProps {
  title: string;
  items: FooterItemProps[];
}

const FooterBlockItem: React.FC<FooterBlockItemProps> = ({ title, items }) => {
  return (
    <div className="space-y-6">
      <h1 className="text-lg font-semibold text-gray-900 dark:text-gray-100">
        {title}
      </h1>
      <ul className="space-y-3">
        {items.map((item) => (
          <FooterItem key={item.id} {...item} />
        ))}
      </ul>
    </div>
  );
};

interface FooterBlock {
  id: number;
  title: string;
  items: FooterItemProps[];
}

const footerBlocks: FooterBlock[] = [
  {
    id: 1,
    title: "Services",
    items: [
      {
        id: 1,
        text: "Web design",
        link: "/",
      },
      {
        id: 2,
        text: " Consultancy ",
        link: "/",
      },
      {
        id: 3,
        text: "Web Development",
        link: "/",
      },
      {
        id: 4,
        text: "Mobile Development",
        link: "/",
      },
      {
        id: 5,
        text: "Mobile Development",
        link: "/",
      },
    ],
  },
  {
    id: 2,
    title: "Company",
    items: [
      {
        id: 1,
        text: "About",
        link: "/about",
      },
      {
        id: 2,
        text: "Career",
        link: "/career",
      },
      {
        id: 3,
        text: "Contact",
        link: "/contact",
      },
      {
        id: 4,
        text: "Services",
        link: "/services",
      },
      {
        id: 5,
        text: "Work",
        link: "/work",
      },
    ],
  },
  {
    id: 3,
    title: "Social",
    items: [
      {
        id: 1,
        text: "Twitter X",
        link: "#",
      },
      {
        id: 2,
        text: "Instagram",
        link: "#",
      },
      {
        id: 3,
        text: "Threds",
        link: "#",
      },
      {
        id: 4,
        text: "Facebook",
        link: "#",
      },
      {
        id: 5,
        text: "Linkedin",
        link: "#",
      },
    ],
  },
  {
    id: 4,
    title: "Ressources",
    items: [
      {
        id: 1,
        text: "Blog",
        link: "#",
      },
      {
        id: 2,
        text: "Privacy",
        link: "#",
      },
      {
        id: 3,
        text: "Terms",
        link: "#",
      },
      {
        id: 4,
        text: "FAQ",
        link: "#",
      },
    ],
  },
];

const FooterBlock: React.FC = () => {
  return (
    <footer className="bg-white dark:bg-gray-950 text-gray-700 dark:text-gray-300">
      <div className="max-w-7xl mx-auto px-5 sm:px-10 md:px-12 lg:px-5">
        <div className="border-t border-t-gray-200 dark:border-t-gray-800 py-16 md:py-20 flex flex-col lg:flex-row gap-14 gap-y-16">
          <div className="w-full lg:w-96 space-y-6">
            <Link
              href="/"
              className="text-xl font-semibold flex items-center gap-x-2"
            >
              <span className="flex">
                <span className="w-3 h-6 rounded-l-full flex bg-red-500" />
                <span className="w-3 h-6 rounded-r-full flex bg-pink-700 mt-2" />
              </span>
              <span className="text-lg text-gray-700 dark:text-gray-300">
                Karmel
              </span>
            </Link>
            <p className="max-w-lg">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Soluta
              iusto est quia a
            </p>
          </div>
          <nav className="flex-1 grid grid-cols-2 md:grid-cols-4 gap-10">
            {footerBlocks.map((footerBlock) => (
              <FooterBlockItem key={footerBlock.id} {...footerBlock} />
            ))}
          </nav>
        </div>
      </div>
      <div className="py-3 bg-gray-100 dark:bg-gray-900">
        <div className="max-w-3xl mx-auto px-5 sm:px-10 md:px-12 lg:px-5 flex justify-center text-center">
          <p> © 2023 Karmel. Developed By <span className="text-red-500"><Link href="https://derkaoui.netlify.app/">Derkaoui Yassir</Link></span> </p>
        </div>
      </div>
    </footer>
  );
};

export default FooterBlock;