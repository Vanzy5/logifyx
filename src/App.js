import './App.css';
import AboutPage from './Pages/AboutPage';
import AutomativesolutionsPage from './Pages/AutomativesolutionsPage';
import ContactPage from './Pages/ContactPage';
import FreightforwadingPage from './Pages/FreightforwadingPage';
import HomePage from './Pages/HomePage';
import RoadtransportationPage from './Pages/RoadtransportationPage';
import StandardshippingPage from './Pages/StandardshippingPage';
import TestimonialsPage from './Pages/TestimonialsPage';

import { BrowserRouter, Routes, Route } from "react-router-dom";
import TrackOrderPage from './Pages/TrackOrderPage';
import CreatePage from './Pages/FormPage/CreatePage';
import UpdatePage from './Pages/FormPage/UpdatePage';
import ViewPage from './Pages/FormPage/ViewPage';
import AdminPage from './Pages/FormPage/AdminPage';
import GetDatawithButton from './Components/GetDatawithButton';
import AdminLogin from './Components/FormPage/AdminLogin';

function App() {
  return (
    
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<HomePage/> } />
        <Route path='about' element={<AboutPage/> } />
        <Route path='contact' element={<ContactPage/> } />
        <Route path='testimonial' element={<TestimonialsPage/> } />
        <Route path='frieghtforwording' element={<FreightforwadingPage/> } />
        <Route path='standardshipping' element={<StandardshippingPage/> } />
        <Route path='automativesolutions' element={<AutomativesolutionsPage/> } />
        <Route path='roadtransportationPage' element={<RoadtransportationPage />} />
        <Route path='trackOrderPage' element={<TrackOrderPage />} />
        {/* <Route path='trackOrderPage' element={<GetDatawithButton />} /> */}
        <Route path='adminLogin' element={<AdminLogin />} />

        <Route path='admin' element={<AdminPage />} />
        <Route path='CreatePage' element={<CreatePage />} />
        <Route path='UpdatePage/:idCode' element={<UpdatePage />} />
        <Route path='ViewPage' element={<ViewPage />} />

        <Route path='*' element={<div>Page not found : 404</div>} />
        </Routes>
    
    </BrowserRouter>
   
  );
}

export default App;
