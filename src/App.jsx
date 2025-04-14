import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Login from './pages/Login';
import OrderList from './pages/OrderList';
import ProtectedRoute from './components/ProtectedRoute';

export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Login />} />
        <Route
          path="/orders"
          element={
            <ProtectedRoute>
              <OrderList />
            </ProtectedRoute>
          }
        />
      </Routes>
    </BrowserRouter>
  );
}