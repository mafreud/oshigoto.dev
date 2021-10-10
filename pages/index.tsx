import Header from "../components/Header"
import StackedLists from "../components/StackedLists"
import Footer from "../components/Footer";

export default function Index(){
    return (
   <>
    <body className = 'bg-gray-100 h-screen'>
    <Header/>
         <div className = 'px-8 py-2'>
            <StackedLists/>
        </div>
     </body>
             <Footer/>
   </>

        );
}