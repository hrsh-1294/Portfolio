import { Switch, Route } from "wouter";
import { queryClient } from "./lib/queryClient";
import { QueryClientProvider } from "@tanstack/react-query";
import { Toaster } from "react-hot-toast";
import NotFound from "@/pages/not-found";
import Home from "@/pages/Home";
import { Layout } from "@/components/Layout";

function Router() {
  return (
    <Switch>
      <Route path="/" component={Home} />
      <Route component={NotFound} />
    </Switch>
  );
}

function App() {
  // Add smooth scrolling behavior
  if (typeof window !== 'undefined') {
    document.documentElement.style.scrollBehavior = 'smooth';
  }

  return (
    <QueryClientProvider client={queryClient}>
      <Layout>
        <Router />
        <Toaster position="bottom-right" reverseOrder={false} />
      </Layout>
    </QueryClientProvider>
  );
}

export default App;