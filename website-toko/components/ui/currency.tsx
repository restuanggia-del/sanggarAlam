"use client";

import { useEffect, useState } from "react";

const formatter = new Intl.NumberFormat("id-ID", {
  minimumFractionDigits: 0,
  style: "currency",
  currency: "IDR",
});

interface CurrencyProps {
  value?: string | number;
}

const Currency: React.FC<CurrencyProps> = ({ value }) => {
  const [isMounted, setIsMounted] = useState(false);

  useEffect(() => {
    setTimeout(() => setIsMounted(true), 0);
  }, []);

  if (!isMounted) {
    return null;
  }

  return (
    <span className="font-semibold">{formatter.format(Number(value))}</span>
  );
};

export default Currency;
