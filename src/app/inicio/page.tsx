import Navbar from "@/components/NavBar";
import HomeView from "@/views/HomeView";
import { ChakraProvider } from "@chakra-ui/react";

export default function Home() {
  //TODO: Falta agregar el footer
  return (
    <>
      <ChakraProvider>
        <Navbar />
        <HomeView />
      </ChakraProvider>
    </>
  );
}
