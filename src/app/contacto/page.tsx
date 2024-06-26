'use client'
import Footer from "@/components/Footer";
import Navbar from "@/components/NavBar"
import Contact from "@/views/ContactView"
import { ChakraProvider } from "@chakra-ui/react";
export default function ContactView() {
    return (
        <>
        <ChakraProvider>
            <Navbar />
            <Contact />
            <Footer />
        </ChakraProvider>
        </>
    )
}