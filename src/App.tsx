import { motion } from "framer-motion";

export default function App() {
  return (
    <main className="min-h-screen grid place-items-center">
      <motion.h1
        className="text-4xl font-extrabold tracking-tight"
        initial={{ opacity: 0, y: 8 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
      >
        Pedro Millán — Portfolio
      </motion.h1>
    </main>
  );
}

