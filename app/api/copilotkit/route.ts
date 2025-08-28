import {
  CopilotRuntime,
  ExperimentalEmptyAdapter,
  LangGraphHttpAgent,
  LangGraphAgent,
  copilotRuntimeNextJSAppRouterEndpoint,
} from "@copilotkit/runtime";
import { NextRequest } from "next/server";
 
// You can use any service adapter here for multi-agent support.
const serviceAdapter = new ExperimentalEmptyAdapter();
 
const runtime = new CopilotRuntime({
  agents: {
    "mitaagent": new LangGraphAgent({
      deploymentUrl: "http://localhost:2024",
      graphId: "mitaagent",
  }),
},
});
 
export const POST = async (req: NextRequest) => {
  const { handleRequest } = copilotRuntimeNextJSAppRouterEndpoint({
    runtime,
    serviceAdapter,
    endpoint: "/api/copilotkit",
  });
  return handleRequest(req);
};