"use client";
import ConstruccionView from "@/components/ConstruccionView";
import Footer from "@/components/Footer";
import Navbar from "@/components/NavBar";
import { ChakraProvider } from "@chakra-ui/react";
import React from "react";

export default function CertificacionesPage() {
  return (
    <>
      <ChakraProvider>
        <Navbar />
        <ConstruccionView />
        <Footer />
      </ChakraProvider>
    </>
  );
}