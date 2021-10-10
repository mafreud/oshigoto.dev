import Header from "../components/Header";
import StackedLists from "../components/StackedLists";
import Footer from "../components/Footer";
import Seo from "../components/Seo";

export default function Index() {
  return (
    <>
      <body className="bg-gray-100 h-screen">
        <Header />
        <div className="px-8 py-2">
          <StackedLists />
        </div>
      </body>
      <Footer />
      <Seo
        pageTitle={"Oshigoto"}
        pageDescription={
          "オープンソースなエンジニアの仕事を無料で探せるサービスです。"
        }
        pageImg={"https://www.oshigoto.dev/"}
        pageImgWidth={1280}
        pageImgHeight={960}
      />
    </>
  );
}
