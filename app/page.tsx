import Link from "next/link";
import Head from "next/head";
import { Tab, TabGroup, TabList, TabPanel, TabPanels } from "@headlessui/react";
import MasonryGallery from "@/components/MasonryGallery";
import { FaChevronDown } from "react-icons/fa6";

const tabs = [
  {
    key: 'featured',
    display: 'Featured'
  },
  {
    key: 'all',
    display: 'All',
  },
  {
    key: 'usa',
    display: 'USA',
    sub: [
      { key: "california", display: "California" },
      { key: "colorado", display: "Colorado" },
      { key: "minnesota", display: "Minnesota" },
      { key: "maine", display: "Maine" },
      { key: "utah", display: "Utah" },
    ],
  },
  {
    key: 'international',
    display: 'International',
    sub: [
      { key: "nepal", display: "Nepal" },
      { key: "peru", display: "Peru" },
      { key: "europe", display: "Europe" },
    ],
  },
]

const items = [
  { id:1, image: '/nepal-ox.jpg', title: 'nepal-ox'},
  { id:2, image: '/ely.jpg', title:'ely'},
  { id:3, image: '/everest.jpg', title:'everest'},
  { id:4, image: '/katahdin.jpg', title:'katahdin'},
  { id:5, image: '/newhampshire.jpg', title:'newhampshire'},
  { id:6, image: '/icelandrainddrop.jpg', title:'iceland'},
]

export default function Home() {
  return (
    <div className="flex flex-col min-h-screen">
      <Head>
        <title>Ethan</title>
      </Head>
      <header className="flex justify-between items-center h-[90px] px-6">
        <div className="">Ethan</div>
        <Link href="#" className="rounded-3xl bg-slate-700 text-slate-50 px-3 py-2 hover:bg-opacity-90">
          Contact
        </Link>
      </header>

      <main className="flex flex-col flex-grow">
          {/*<TabGroup className="flex flex-col flex-grow">*/}
<TabGroup>
  <div className="sticky top-0 z-50 bg-slate-50 transition-all duration-300">
            <TabList className="flex items-center justify-center gap-14 px-6 py-4">
              {tabs.map((tab) =>
                tab.sub ? (<div key={tab.key} className="relative group">
                <Tab className="flex items-center text-gray-500 data-[selected]:text-gray-800 hover:text-gray-800 py-2 px-4">
                   {tab.display}
                   <FaChevronDown className="ml-1" size={10}/>
                </Tab>

                {/* Dropdown Menu */}
                {/* */}<div className="absolute left-0 hidden w-40 bg-white shadow-lg group-hover:block z-10">
                 {tab.sub.map((subTab) => (
                    <Link
                      key={subTab.key}
                      href={`#${subTab.key}`}
                      className="block py-2 px-4 text-gray-500 hover:text-gray-800 hover:bg-gray-100"
                    >
                      {subTab.display}
                    </Link>
                  ))}
                </div>
              </div>
            ):(
                  <Tab key={tab.key}
                  className="text-gray-500 data-[selected]:text-gray-800 hover:text-gray-800 py-2 px-4"
                  >
                    {tab.display}
                  </Tab>
              ))}
            </TabList>
            </div>

            <div className="max-w-8xl mx-auto w-full px-4  flex flex-col flex-grow">
            <TabPanels className=" p-2 sm:px-4 my-6 flex-grow">
              <TabPanel><MasonryGallery items={items}/></TabPanel>
              <TabPanel><p className="text-text hover:text-text-hover">Content 2</p></TabPanel>
              <TabPanel>Content 3</TabPanel>
              <TabPanel>Content 4</TabPanel>
            </TabPanels>
            </div>
          </TabGroup>
      </main>

      <footer className="h-[60px] flex justify-center items-center text-text-dark">
       <p>Placeholder for footer</p>
      </footer>
    </div>
  );
}
