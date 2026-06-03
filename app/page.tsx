import { Hero } from "@/components/home/hero";
import { ValueProps } from "@/components/home/value-props";
import { Manifesto } from "@/components/home/manifesto";
import { OrderCta } from "@/components/home/order-cta";

export default function Home() {
  return (
    <>
      <Hero />
      <ValueProps />
      <Manifesto />
      <OrderCta />
    </>
  );
}
