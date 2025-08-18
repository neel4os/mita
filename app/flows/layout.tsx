import "@copilotkit/react-ui/styles.css";
import { ReactNode } from "react";
import { CopilotKit } from "@copilotkit/react-core";

export default function FlowLayout({
  children,
}: {
  children: React.ReactNode;
}) {
const copilotkitPublicKey = process.env.COPILOTKKIT_PUBLIC_KEY
  return (

    <CopilotKit publicLicenseKey={copilotkitPublicKey} runtimeUrl="/api/copilotkit" agent="mita">
      {children}
    </CopilotKit>
  );
}
