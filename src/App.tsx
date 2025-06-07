
import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import { LanguageProvider } from "./contexts/LanguageContext";
import { ThemeProvider } from "./contexts/ThemeContext";
import { useEffect } from 'react';

// Layouts
import MainLayout from "./layouts/MainLayout";

// Pages
import Index from "./pages/Index";
import About from "./pages/About";
import Contact from "./pages/Contact";
import Products from "./pages/Products";
import Solutions from "./pages/Solutions";
import Developers from "./pages/Developers";
import Partners from "./pages/Partners";
import Support from "./pages/Support";
import Status from "./pages/Status";

// Product Sub-pages
import TetraTv from "./pages/products/TetraTv";
import TetraRadio from "./pages/products/TetraRadio";
import MediaPlayer from "./pages/products/MediaPlayer";
import DigitalContentDistribution from "./pages/products/DigitalContentDistribution";
import CreatorTools from "./pages/products/CreatorTools";
import DroneServices from "./pages/products/DroneServices";
import FlightSoftware from "./pages/products/FlightSoftware";
import AirportTech from "./pages/products/AirportTech";
import AirCharter from "./pages/products/AirCharter";
import TetraMeet from "./pages/products/TetraMeet";
import OfficeSuite from "./pages/products/OfficeSuite";
import TetraMail from "./pages/products/TetraMail";
import TaskManager from "./pages/products/TaskManager";
import Mobix from "./pages/products/Mobix";
import CoreBanking from "./pages/products/CoreBanking";
import TetraCloud from "./pages/products/TetraCloud";
import CdnServices from "./pages/products/CdnServices";
import CloudGaming from "./pages/products/CloudGaming";
import GamingHub from "./pages/products/GamingHub";
import GameDevTools from "./pages/products/GameDevTools";
import TetraAi from "./pages/products/TetraAi";
import ChatbotPlatform from "./pages/products/ChatbotPlatform";
import VoiceApis from "./pages/products/VoiceApis";
import AppStore from "./pages/products/AppStore";
import DeveloperSdks from "./pages/products/DeveloperSdks";

// Other pages
import NotFound from "./pages/NotFound";
import { Suspense } from 'react';
import LoadingSpinner from './components/ui/loading-spinner';

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <LanguageProvider>
      <ThemeProvider>
        <TooltipProvider>
          <Toaster />
          <Sonner />
          <BrowserRouter>
            <Suspense fallback={<LoadingSpinner />}>
              <Routes>
                <Route path="/" element={<MainLayout />}>
                  <Route index element={<Index />} />
                  <Route path="about" element={<About />} />
                  <Route path="contact" element={<Contact />} />
                  <Route path="products" element={<Products />}>
                    <Route path="tetra-tv" element={<TetraTv />} />
                    <Route path="tetra-radio" element={<TetraRadio />} />
                    <Route path="media-player" element={<MediaPlayer />} />
                    <Route path="content-distribution" element={<DigitalContentDistribution />} />
                    <Route path="creator-tools" element={<CreatorTools />} />
                    <Route path="drone-services" element={<DroneServices />} />
                    <Route path="flight-software" element={<FlightSoftware />} />
                    <Route path="airport-tech" element={<AirportTech />} />
                    <Route path="air-charter" element={<AirCharter />} />
                    <Route path="tetra-meet" element={<TetraMeet />} />
                    <Route path="office-suite" element={<OfficeSuite />} />
                    <Route path="tetra-mail" element={<TetraMail />} />
                    <Route path="task-manager" element={<TaskManager />} />
                    <Route path="mobix" element={<Mobix />} />
                    <Route path="core-banking" element={<CoreBanking />} />
                    <Route path="tetra-cloud" element={<TetraCloud />} />
                    <Route path="cdn" element={<CdnServices />} />
                    <Route path="cloud-gaming" element={<CloudGaming />} />
                    <Route path="gaming-hub" element={<GamingHub />} />
                    <Route path="game-dev-tools" element={<GameDevTools />} />
                    <Route path="tetra-ai" element={<TetraAi />} />
                    <Route path="chatbot" element={<ChatbotPlatform />} />
                    <Route path="voice-apis" element={<VoiceApis />} />
                    <Route path="app-store" element={<AppStore />} />
                    <Route path="developer-sdks" element={<DeveloperSdks />} />
                  </Route>
                  <Route path="solutions" element={<Solutions />} />
                  <Route path="developers" element={<Developers />} />
                  <Route path="partners" element={<Partners />} />
                  <Route path="support" element={<Support />}>
                    <Route path="status" element={<Status />} />
                  </Route>
                  <Route path="status" element={<Status />} />

                  {/* Legacy routes - redirect to new structure */}
                  <Route path="/banking" element={<Navigate to="/products/core-banking" replace />} />
                  <Route path="/airlines" element={<Navigate to="/products/air-charter" replace />} />
                  <Route path="/tv-broadcasting" element={<Navigate to="/products/lynx-tv" replace />} />

                  {/* 404 - Keep this last */}
                  <Route path="*" element={<NotFound />} />
                </Route>
              </Routes>
            </Suspense>
          </BrowserRouter>
        </TooltipProvider>
      </ThemeProvider>
    </LanguageProvider>
  </QueryClientProvider>
);

export default App;
