// src/components/certificates/CertificateGrid.jsx
import React from "react";
import { AnimatePresence, motion } from "framer-motion";
import CertificateCard from "./CertificateCard.jsx";

const CertificateGrid = ({
  certificates,
  emptyMessage = "No certificates found.",
}) => {
  if (!certificates.length) {
    return (
      <div className="text-center py-20">
        <p className="text-gray-500 text-sm">{emptyMessage}</p>
      </div>
    );
  }

  return (
    <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
      <AnimatePresence mode="popLayout">
        {certificates.map((cert, i) => (
          <motion.div
            key={cert.id}
            layout
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0.95 }}
            transition={{ duration: 0.3 }}
          >
            <CertificateCard certificate={cert} delay={i * 0.05} />
          </motion.div>
        ))}
      </AnimatePresence>
    </div>
  );
};

export default CertificateGrid;