import Image from "next/image";
import { ReactNode } from "react";

interface CARD {
  title: string;
  description: string;
  image: ReactNode;
  path: string;
}

const iconsCommonStyle = "text-4xl text-secondary";

export const CARDS: CARD[] = [
  {
    title: "Nutrição e Bem-Estar",
    description:
      "Transforme sua saúde e bem-estar com orientações nutricionais personalizadas. Aprenda a fazer escolhas alimentares inteligentes que impulsionarão sua energia, fortalecerão seu corpo e nutrirão sua mente.",
    image: (
      <Image
        alt="Nutrição e Bem-Estar"
        src={"/img/icon1.png"}
        height={30}
        width={30}
        className={iconsCommonStyle}
      />
    ),
    path: `#`,
  },
  {
    title: "Nutrição Infantil",
    description:
      "Prepare seu filho para um futuro saudável com nossos programas de nutrição infantil. Desde orientações sobre amamentação até dicas para introdução de alimentos sólidos, estamos aqui para ajudar seu filho a desenvolver hábitos alimentares saudáveis desde cedo.",
    image: (
      <Image
        alt="Nutrição Infantil"
        src={"/img/icon2.png"}
        height={30}
        width={30}
      />
    ),
    path: `#`,
  },
  {
    title: "Segurança Alimentar",
    description:
      "Garanta a segurança alimentar de sua família com nosso serviço especializado. Aprenda sobre armazenamento adequado de alimentos, manipulação segura e prevenção de contaminação para garantir que sua comida seja sempre segura e saudável.",
    image: (
      <Image
        alt="Segurança Alimentar"
        src={"/img/icon3.png"}
        height={30}
        width={30}
      />
    ),
    path: `#`,
  },
  {
    title: "Planejamento de Refeições Saudáveis",
    description:
      "Simplifique sua vida com nosso serviço de planejamento de refeições saudáveis. Receba orientações personalizadas e receitas deliciosas que se encaixam no seu estilo de vida e ajudam a alcançar seus objetivos de saúde.",
    image: (
      <Image
        alt="Planejamento de Refeições Saudáveis"
        src={"/img/icon4.png"}
        height={30}
        width={30}
      />
    ),
    path: `#`,
  },
];
