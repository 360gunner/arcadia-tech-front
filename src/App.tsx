
import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import { LanguageProvider } from "./contexts/LanguageContext";
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
      <TooltipProvider>
        <Toaster />
        <Sonner />
        <BrowserRouter>
          <Suspense fallback={<LoadingSpinner />}>
            <Routes>
              <Route element={<MainLayout />}>
                {/* Main Pages */}
                <Route path="/" element={<Index />} />
                <Route path="/about" element={<About />} />
                <Route path="/contact" element={<Contact />} />
                <Route path="/products" element={<Products />}>
                  <Route path="tetra-tv" element={<TetraTv />} />
                  <Route path="tetra-radio" element={<TetraRadio />} />
                  <Route path="media-player" element={<MediaPlayer />} />
                  <Route path="tetra-meet" element={<TetraMeet />} />
                  <Route path="tetra-mail" element={<TetraMail />} />
                  <Route path="tetra-ai" element={<TetraAi />} />
                </Route>
                <Route path="/developers" element={<Developers />} />
                <Route path="/partners" element={<Partners />} />
                <Route path="/support" element={<Support />}>
                  <Route path="status" element={<Status />} />
                </Route>
                <Route path="/status" element={<Status />} />

                {/* Product Pages */}
                <Route path="/products/tetra-tv" element={<TetraTv />} />
                <Route path="/products/tetra-radio" element={<TetraRadio />} />
                <Route path="/products/media-player" element={<MediaPlayer />} />
                <Route path="/products/content-distribution" element={<DigitalContentDistribution />} />
                <Route path="/products/creator-tools" element={<CreatorTools />} />
                <Route path="/products/drone-services" element={<DroneServices />} />
                <Route path="/products/flight-software" element={<FlightSoftware />} />
                <Route path="/products/airport-tech" element={<AirportTech />} />
                <Route path="/products/air-charter" element={<AirCharter />} />
                <Route path="/products/tetra-meet" element={<TetraMeet />} />
                <Route path="/products/office-suite" element={<OfficeSuite />} />
                <Route path="/products/tetra-mail" element={<TetraMail />} />
                <Route path="/products/task-manager" element={<TaskManager />} />
                <Route path="/products/mobix" element={<Mobix />} />
                <Route path="/products/core-banking" element={<CoreBanking />} />
                <Route path="/products/tetra-cloud" element={<TetraCloud />} />
                <Route path="/products/cdn" element={<CdnServices />} />
                <Route path="/products/cloud-gaming" element={<CloudGaming />} />
                <Route path="/products/gaming-hub" element={<GamingHub />} />
                <Route path="/products/game-dev-tools" element={<GameDevTools />} />
                <Route path="/products/tetra-ai" element={<TetraAi />} />
                <Route path="/products/chatbot" element={<ChatbotPlatform />} />
                <Route path="/products/voice-apis" element={<VoiceApis />} />
                <Route path="/products/app-store" element={<AppStore />} />
                <Route path="/products/developer-sdks" element={<DeveloperSdks />} />

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
    </LanguageProvider>
  </QueryClientProvider>
);

export default App;
