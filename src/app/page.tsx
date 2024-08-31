import { Container } from "@/components/Container";
import { Hero } from "@/components/Hero";
import { SectionTitle } from "@/components/SectionTitle";
import { Benefits } from "@/components/Benefits";
import { Testimonials } from "@/components/Testimonials";
import { Faq } from "@/components/Faq";
import { Cta } from "@/components/Cta";

import { benefitOne, benefitTwo } from "@/components/data";
export default function Home() {
  return (
    <Container>
      <Hero />
      <SectionTitle
        preTitle="Bem-vindo à Cleanly!"
        title="A sua plataforma de serviços de limpeza"
      >
        Na Cleanly, tornamos a procura de serviços de limpeza fiáveis e profissionais mais fácil do que nunca.
        A nossa plataforma conecta-o com profissionais de limpeza experientes e verificados, prontos para ajudá-lo a
        manter um ambiente limpo e saudável. Seja para uma limpeza profunda pontual ou manutenção regular,
        a Cleanly está aqui para si.
      </SectionTitle>

      <Benefits data={benefitOne} />
      <Benefits imgPos="right" data={benefitTwo} />

      <SectionTitle
        preTitle="Testemunhos"
        title="O que dizem os nossos clientes"
      >
      </SectionTitle>

      <Testimonials />

      <SectionTitle preTitle="FAQ" title="Perguntas Frequentes"></SectionTitle>

      <Faq />
      <Cta />
    </Container>
  );
}
