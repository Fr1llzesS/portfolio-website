import { Switch, Route, useLocation } from "wouter";
import { queryClient } from "./lib/queryClient";
import { QueryClientProvider } from "@tanstack/react-query";
import { Toaster } from "@/components/ui/toaster";
import { TooltipProvider } from "@/components/ui/tooltip";
import { LanguageProvider } from "@/contexts/language-context";
import Portfolio from "@/pages/portfolio";
import { AnimatePresence, motion } from "framer-motion";

// Анимация для страницы при переходе
const pageTransition = {
  initial: { opacity: 0, x: -20 },
  animate: { opacity: 1, x: 0 },
  exit: { opacity: 0, x: 20 },
  transition: { duration: 0.3 }
};

function Router() {
  const [location] = useLocation();
  
  return (
    <AnimatePresence mode="wait">
      <Switch key={location}>
        <Route path="/">
          <motion.div
            initial="initial"
            animate="animate"
            exit="exit"
            variants={pageTransition}
          >
            <Portfolio />
          </motion.div>
        </Route>
        <Route path="/portfolio">
          <motion.div
            initial="initial"
            animate="animate"
            exit="exit"
            variants={pageTransition}
          >
            <Portfolio />
          </motion.div>
        </Route>
        <Route>
          <motion.div
            initial="initial"
            animate="animate"
            exit="exit"
            variants={pageTransition}
          >
            <Portfolio />
          </motion.div>
        </Route>
      </Switch>
    </AnimatePresence>
  );
}

function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <LanguageProvider>
        <TooltipProvider>
          <Toaster />
          <Router />
        </TooltipProvider>
      </LanguageProvider>
    </QueryClientProvider>
  );
}

export default App;
