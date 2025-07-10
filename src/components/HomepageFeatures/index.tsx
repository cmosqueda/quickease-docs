import type { ReactNode } from "react";
import clsx from "clsx";
import Heading from "@theme/Heading";
import styles from "./styles.module.css";

type FeatureItem = {
  title: string;
  Svg: React.ComponentType<React.ComponentProps<"svg">>;
  description: ReactNode;
};

const FeatureList: FeatureItem[] = [
  {
    title: "Full-Stack TypeScript + Node.js Environment",
    Svg: require("@site/static/img/undraw_docusaurus_mountain.svg").default,
    description: (
      <>
        QuickEase 2.0 is built entirely with TypeScript — from frontend to backend. If you&apos;re a TypeScript fan,
        you&apos;ll feel right at home.
      </>
    ),
  },
  {
    title: "Clean & Maintainable Codebase",
    Svg: require("@site/static/img/undraw_docusaurus_tree.svg").default,
    description: (
      <>
        The project follows modern, standardized coding practices. Folder structures are intuitive, and every module is
        designed for scalability and reusability.
      </>
    ),
  },
  {
    title: "Tested and Documented",
    Svg: require("@site/static/img/undraw_docusaurus_react.svg").default,
    description: (
      <>
        Unit tests, API docs, and internal logic are all documented — so you won&apos;t feel lost digging through the
        codebase.
      </>
    ),
  },
  {
    title: "Open-Source Friendly",
    Svg: require("@site/static/img/undraw_docusaurus_react.svg").default,
    description: (
      <>
        Most tools and packages used in QuickEase 2.0 are open-source (except for key integrations like Gemini AI and
        Google Cloud).
      </>
    ),
  },
  {
    title: "Built for React Developers",
    Svg: require("@site/static/img/undraw_docusaurus_react.svg").default,
    description: (
      <>
        The frontend is built using <b>React (Vite)</b> for web and <b>Expo React Native</b> for mobile — so if
        you&apos;re a React developer, contributing will feel smooth and familiar.
      </>
    ),
  },
  {
    title: "Modular Architecture",
    Svg: require("@site/static/img/undraw_docusaurus_react.svg").default,
    description: (
      <>
        The app is structured into <code>client/</code> and <code>server/</code> directories, following a logical 3-tier
        model — making it easy to navigate and extend both ends of the stack.
      </>
    ),
  },
];

function Feature({ title, Svg, description }: FeatureItem) {
  return (
    <div className={clsx("col col--4")}>
      <div className="text--center">
        <Svg className={styles.featureSvg} role="img" />
      </div>
      <div className="text--center padding-horiz--md">
        <Heading as="h3">{title}</Heading>
        <p>{description}</p>
      </div>
    </div>
  );
}

export default function HomepageFeatures(): ReactNode {
  return (
    <section className={styles.features}>
      <div className="container">
        <div className="row">
          {FeatureList.map((props, idx) => (
            <Feature key={idx} {...props} />
          ))}
        </div>
      </div>
    </section>
  );
}
