import { BrowserRouter, Route, Routes } from "react-router-dom";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import Home from './Pages/Home.tsx';
import NavBar from "./components/NavBar/index.tsx";
import Clientes from "./Pages/Clientes.tsx";
import MainWrapper from "./components/MainWrapper/index.tsx";
import ProdutosServicos from "./Pages/ProdutosServicos.tsx";
import Dashboard from "./components/DashBoard/index.tsx";

export default function App() {
  return (
    <QueryClientProvider client={new QueryClient}>
    <BrowserRouter>
        <NavBar>
        <MainWrapper>
          <Routes>
            <Route path='/' element={<Home/>}/>
            <Route path='/clientes' element={<Clientes/>}/>
            <Route path='/produtos-servicos' element={<ProdutosServicos/>}/>
            <Route path='/dashboard' element={<Dashboard/>}/>
          </Routes>
        </MainWrapper>
        </NavBar>
      </BrowserRouter>
    </QueryClientProvider>
  )
}