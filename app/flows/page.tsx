import { CopilotPopup } from "@copilotkit/react-ui";
import { Background, Controls, ReactFlow, ReactFlowProvider } from "@xyflow/react";
import "@xyflow/react/dist/style.css";
export default function FlowPage() {
  return (
        <div>
        <div style={{ width: "100%", height: "100vh" }}>
          <ReactFlow>
            <Background/>
            <Controls/>
          </ReactFlow>
        </div>
        <div>
       <CopilotPopup
        defaultOpen={false}
        instructions="you are a helpful assistant"
        labels={{
          title: "Sidebar assistant",
          initial:
            "This is a sidebar assistant that helps you with your tasks.",
        }}
      ></CopilotPopup>
      </div>
      </div>

  );
}
