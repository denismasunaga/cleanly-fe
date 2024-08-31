"use client";
import React from "react";
import { Container } from "@/components/Container";
import { Disclosure, DisclosureButton, DisclosurePanel } from "@headlessui/react";
import { ChevronUpIcon } from "@heroicons/react/24/solid";

export const Faq = () => {
  return (
    <Container className="!p-0">
      <div className="w-full max-w-2xl p-2 mx-auto rounded-2xl">
        {faqdata.map((item, index) => (
          <div key={item.question} className="mb-5">
            <Disclosure>
              {({ open }) => (
                <>
                  <DisclosureButton className="flex items-center justify-between w-full px-4 py-4 text-lg text-left text-gray-800 rounded-lg bg-gray-50 hover:bg-gray-100 focus:outline-none focus-visible:ring focus-visible:ring-indigo-100 focus-visible:ring-opacity-75 dark:bg-trueGray-800 dark:text-gray-200">
                    <span>{item.question}</span>
                    <ChevronUpIcon
                      className={`${
                        open ? "transform rotate-180" : ""
                      } w-5 h-5 text-indigo-500`}
                    />
                  </DisclosureButton>
                  <DisclosurePanel className="px-4 pt-4 pb-2 text-gray-500 dark:text-gray-300">
                    {item.answer}
                  </DisclosurePanel>
                </>
              )}
            </Disclosure>
          </div>
        ))}
      </div>
    </Container>
  );
}

const faqdata = [
  {
    question: "O que é a Cleanly?",
    answer: "A Cleanly é uma plataforma online que conecta clientes com profissionais de limpeza de confiança. Facilitamos a marcação de serviços de limpeza para sua casa ou escritório, oferecendo uma experiência simples, segura e eficaz.",
  },
  {
    question: "Como posso marcar um serviço de limpeza?",
    answer: "Marcar um serviço de limpeza com a Cleanly é fácil! Basta seguir estes passos: Insira a sua localização e escolha o tipo de serviço de limpeza que precisa. Navegue pelos perfis dos profissionais disponíveis e selecione o que melhor se adequa às suas necessidades. Agende a data e a hora que preferir e confirme a sua marcação através da nossa plataforma segura.",
  },
  {
    question: "Os profissionais de limpeza são verificados?",
    answer:
      "Sim, todos os profissionais de limpeza na Cleanly são rigorosamente verificados. Realizamos verificações de antecedentes e avaliações contínuas baseadas no feedback dos clientes para garantir que apenas os melhores profissionais estão disponíveis na nossa plataforma.",
  },
  {
    question: "Como é feito o pagamento?",
    answer:
      "O pagamento é feito diretamente através da nossa plataforma no momento da marcação. Aceitamos vários métodos de pagamento seguros, incluindo cartão de crédito e PayPal. O pagamento só é processado após a conclusão do serviço.",
  },
  {
    question: "O que acontece se eu não estiver satisfeito com o serviço?",
    answer:
      "A satisfação do cliente é a nossa prioridade. Se não estiver satisfeito com o serviço prestado, contacte-nos dentro de 24 horas após a conclusão do serviço. Faremos o possível para resolver o problema, incluindo a possibilidade de uma nova limpeza ou reembolso.",
  },
  {
    question: "Posso cancelar ou reagendar uma marcação?",
    answer:
      "Sim, pode cancelar ou reagendar a sua marcação através da nossa plataforma, com antecedência mínima de 24 horas. Consulte os nossos Termos de Serviço para informações detalhadas sobre cancelamentos e reembolsos.",
  },
  {
    question: "Como posso tornar-me um profissional de limpeza na Cleanly?",
    answer:
      "Se deseja oferecer os seus serviços na Cleanly, pode inscrever-se como profissional de limpeza através do nosso site. Após o registo, passará por um processo de verificação e, se aprovado, poderá começar a receber pedidos de clientes na sua área.",
  },
  {
    question: "Posso escolher o mesmo profissional de limpeza para futuras marcações?",
    answer:
      "Sim, pode escolher o mesmo profissional para futuras marcações, desde que ele esteja disponível na data e hora que deseja. Muitos dos nossos clientes gostam de continuar com o mesmo profissional de confiança.",
  },
  {
    question: "A Cleanly oferece serviços de limpeza para empresas?",
    answer:
      "Sim, a Cleanly oferece serviços de limpeza tanto para clientes particulares como para empresas. Pode selecionar o tipo de serviço de que necessita, seja para um pequeno escritório ou para grandes instalações comerciais.",
  },
  {
    question: "Como posso contactar a Cleanly?",
    answer:
      "Pode contactar a nossa equipa de apoio ao cliente através do nosso formulário de contacto no site ou enviando um e-mail para [email de suporte]. Estamos aqui para ajudar com qualquer questão ou preocupação que possa ter.",
  },
];
