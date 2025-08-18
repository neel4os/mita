import { CopilotSidebar } from "@copilotkit/react-ui";
export default function FlowPage() {
  return (
    <CopilotSidebar
      defaultOpen={true}
      instructions="you are a helpful assistant"
      labels={{
        title: "Sidebar assistant",
        initial: "This is a sidebar assistant that helps you with your tasks.",
      }}
    >
      <h1>Flow</h1>
      <p>This is the flow page.</p>
    </CopilotSidebar>
  );
}
