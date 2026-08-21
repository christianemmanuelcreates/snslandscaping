import { lazy, Suspense } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { HelmetProvider } from "react-helmet-async";

import { ScrollToHash } from "@/components/ScrollToHash";
import { ChatWidget } from "@/components/ChatWidget";

import { Layout } from "@/components/Layout";

const Home = lazy(() => import("./pages/Home"));
const Services = lazy(() => import("./pages/Services"));
const ServiceDetail = lazy(() => import("./pages/ServiceDetail"));
const ServiceAreas = lazy(() => import("./pages/ServiceAreas"));
const AreaDetail = lazy(() => import("./pages/AreaDetail"));
const About = lazy(() => import("./pages/About"));
const Gallery = lazy(() => import("./pages/Gallery"));
const Reviews = lazy(() => import("./pages/Reviews"));
const Contact = lazy(() => import("./pages/Contact"));

function PageLoader() {
  return (
    <div className="flex min-h-[60vh] items-center justify-center">
      <div className="size-8 animate-spin rounded-full border-2 border-primary border-t-transparent" />
    </div>
  );
}

export default function App() {
  return (
    <HelmetProvider>
      <BrowserRouter>
        <ScrollToHash />
        <Routes>
          <Route
            path="/"
            element={
              <Suspense fallback={<PageLoader />}>
                <Home />
              </Suspense>
            }
          />
          <Route
            path="/services"
            element={
              <Suspense fallback={<PageLoader />}>
                <Services />
              </Suspense>
            }
          />
          <Route
            path="/services/:slug"
            element={
              <Suspense fallback={<PageLoader />}>
                <ServiceDetail />
              </Suspense>
            }
          />
          <Route
            path="/areas"
            element={
              <Suspense fallback={<PageLoader />}>
                <ServiceAreas />
              </Suspense>
            }
          />
          <Route
            path="/areas/:slug"
            element={
              <Suspense fallback={<PageLoader />}>
                <AreaDetail />
              </Suspense>
            }
          />
          <Route
            path="/about"
            element={
              <Suspense fallback={<PageLoader />}>
                <About />
              </Suspense>
            }
          />
          <Route
            path="/gallery"
            element={
              <Suspense fallback={<PageLoader />}>
                <Gallery />
              </Suspense>
            }
          />
          <Route
            path="/reviews"
            element={
              <Suspense fallback={<PageLoader />}>
                <Reviews />
              </Suspense>
            }
          />
          <Route
            path="/contact"
            element={
              <Suspense fallback={<PageLoader />}>
                <Contact />
              </Suspense>
            }
          />
        </Routes>
        <ChatWidget />
      </BrowserRouter>
    </HelmetProvider>
  );
}
