import { BrowserRouter, Routes, Route } from 'react-router-dom';
import App from './App';
import GraphGuardCaseStudy from './case-studies/GraphGuardCaseStudy';
import InsurAICaseStudy from './case-studies/InsurAICaseStudy';

function AppRouter() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<App />} />
        <Route path="/case-study/graphguard" element={<GraphGuardCaseStudy />} />
        <Route path="/case-study/insurai" element={<InsurAICaseStudy />} />
      </Routes>
    </BrowserRouter>
  );
}

export default AppRouter;
