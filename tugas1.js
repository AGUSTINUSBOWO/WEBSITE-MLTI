import { useState } from "react";
import { motion } from "framer-motion";

const App = () => {
  const [page, setPage] = useState("dashboard");

  const handleBack = () => setPage("dashboard");

  return (
    <div className="w-full h-screen flex items-center justify-center relative bg-cover bg-center" style={{ backgroundImage: `url('/path-to-dashboard-background.jpg')` }}>
      {page === "dashboard" && (
        <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }} className="text-center">
          <div className="absolute top-4 left-4 text-white font-bold text-lg">Agustinus Wahyu Wibowo (124230028)</div>
          <div className="absolute top-4 right-4 text-white font-bold text-lg">ASSIGNMENT 1 MLTI SI-D</div>
          <motion.h1 className="text-3xl font-bold text-white mb-8">Dashboard</motion.h1>
          <div className="flex flex-col space-y-4">
            <motion.button whileHover={{ scale: 1.1 }} onClick={() => setPage("menu1")} className="px-6 py-3 bg-blue-500 text-white rounded-lg">Value & Outcome</motion.button>
            <motion.button whileHover={{ scale: 1.1 }} onClick={() => setPage("menu2")} className="px-6 py-3 bg-green-500 text-white rounded-lg">Cost, Risk, Output & Outcomes</motion.button>
            <motion.button whileHover={{ scale: 1.1 }} onClick={() => setPage("menu3")} className="px-6 py-3 bg-yellow-500 text-white rounded-lg">Utility & Warranty</motion.button>
          </div>
        </motion.div>
      )}

      {page !== "dashboard" && (
        <motion.div initial={{ x: "100%" }} animate={{ x: 0 }} exit={{ x: "100%" }} className="w-full h-screen flex items-center justify-center relative bg-cover bg-center" style={{ backgroundImage: `url('/path-to-${page}-background.jpg')` }}>
          <img src={`/path-to-${page}-image.jpg`} alt="Penjelasan" className="max-w-3xl w-full h-auto shadow-lg" />
          <motion.button whileHover={{ scale: 1.1 }} onClick={handleBack} className="absolute bottom-4 right-4 px-6 py-3 bg-red-500 text-white rounded-lg">Kembali</motion.button>
        </motion.div>
      )}
    </div>
  );
};

export default App;
