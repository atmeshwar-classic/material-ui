import { Routes, Route, Navigate } from "react-router-dom";
import Cards from "../screens/Cards/cards";
import Tabs from "../screens/Tabs/tabs";
import Form from "../screens/Form/form";

const Router = () => {
  return (
    <>
      <Routes>
        <Route path='/' element={<Navigate to='/cards' />} />
        <Route path='/cards' element={<Cards />} />
        <Route path='/form' element={<Form />} />
        <Route path='/tabs' element={<Tabs />} />
        <Route path='*' element={<Navigate to='/cards' />} />
      </Routes>
    </>
  )
}

export default Router