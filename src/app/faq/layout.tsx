interface FaqLayoutProps {
  children: React.ReactNode;
}

export const generateMetadata = async () => {
  return {
    title: "FAQs - Solciety",
    description:
      "Generated by create next appFrequently Asked Questions (FAQ) - Solciety",
  };
};

const FaqLayout = ({ children }: FaqLayoutProps) => {
  return <section>{children}</section>;
};

export default FaqLayout;
