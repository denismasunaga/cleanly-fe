import {
  MagnifyingGlassCircleIcon,
  CheckCircleIcon,
  FaceSmileIcon,
  UserCircleIcon,
  ClockIcon,
  CurrencyEuroIcon,
  SparklesIcon,
} from "@heroicons/react/24/solid";

import benefitOneImg from "../../public/img/benefit-one.png";
import benefitTwoImg from "../../public/img/benefit-two.png";

const benefitOne = {
  title: "Como funciona a Cleanly",
  desc: "",
  image: benefitOneImg,
  bullets: [
    {
      title: "Pesquisar",
      desc: "Introduza a sua localização e escolha o tipo de serviço de limpeza que precisa. Navegue pelos perfis de profissionais de confiança na sua área.",
      icon: <MagnifyingGlassCircleIcon />,
    },
    {
      title: "Marcar",
      desc: "Selecione o seu profissional preferido, agende um horário que seja conveniente para si e marque instantaneamente através da nossa plataforma segura.",
      icon: <CheckCircleIcon />,
    },
    {
      title: "Relaxe",
      desc: "Relaxe enquanto os nossos profissionais cuidam da limpeza. O pagamento é processado automaticamente após a conclusão do serviço.",
      icon: <FaceSmileIcon />,
    },
  ],
};

const benefitTwo = {
  title: "Por que escolher a Cleanly?",
  desc: "",
  image: benefitTwoImg,
  bullets: [
    {
      title: "Profissionais de confiança",
      desc: "Os nossos profissionais de limpeza são rigorosamente verificados e avaliados por clientes como você, garantindo um serviço de alta qualidade sempre.",
      icon: <UserCircleIcon />,
    },
    {
      title: "Agendamento flexível",
      desc: "Marque uma limpeza no horário que melhor se adequa à sua agenda, seja uma necessidade de última hora ou uma marcação regular.",
      icon: <ClockIcon />,
    },
    {
      title: "Preços transparentes",
      desc: "Na Cleanly, não há taxas ocultas. O que vê é o que paga, com tarifas competitivas para todos os orçamentos.",
      icon: <CurrencyEuroIcon />,
    },
    {
      title: "Satisfação garantida",
      desc: "Confiamos na qualidade dos nossos serviços. Se não ficar satisfeito, faremos o possível para corrigir.",
      icon: <SparklesIcon />,
    },
  ],
};


export {benefitOne, benefitTwo};
