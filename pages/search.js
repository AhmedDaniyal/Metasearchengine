import Head from "next/head";
import Header from "../components/Header";
import MockResponse from "../data/MockResponse";
import { useRouter } from "next/router";
import SearchResults from "../components/SearchResults";
import Footer from "../components/Footer";
import Link from 'next/link';



export default function Search({ results }) {

  const router = useRouter();

  return (
    <div className="bg-white text-black">
      <Head>
        <title>{router.query.term} - Findit Search</title>
        <link rel="icon" href="/icon.png" />
      </Head>

      <Header />

      {/* Search Results */}
      <SearchResults results={results} />
     
     <Footer className=" group-even:focus:invisible" />
    
    </div>
  );
}

export async function getServerSideProps(context) {
  const useDummyData = false;
  const startIndex = context.query.start || "0";
  const data = useDummyData
    ? MockResponse
    : await fetch(
        `https://www.googleapis.com/customsearch/v1?key=AIzaSyB06Unrbi3Dh3LH-Hbgsdm7qd9HIDWj7gE&cx=partner-pub-3853029306847841:xz1zltlp4uh&q=${context.query.term}&start=${startIndex}`
      ).then((response) => response.json());

  return {
    props: {
      results: data,
    },
  };
}
