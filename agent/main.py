from langgraph.graph import StateGraph, START, END
from langgraph.graph.message import add_messages
from typing_extensions import TypedDict
from typing import Annotated

# from langchain.chat_models import init_chat_model
from dotenv import load_dotenv
from langchain_openai import ChatOpenAI
import os

load_dotenv()
apikey = os.getenv("OPENAI_API_KEY")


class State(TypedDict):
    messages: Annotated[list, add_messages]


# llm = init_chat_model("deepseek/deepseek-r1-distill-llama-70b:free")
llm = ChatOpenAI(
    base_url="https://openrouter.ai/api/v1",
    model="deepseek/deepseek-chat-v3-0324:free",
    api_key=apikey,
)


def chatbot(state: State) -> str:
    return {"messages": [llm.invoke(state["messages"])]}


graph_builder = StateGraph(State)
graph_builder.add_node("chatbot", chatbot)
graph_builder.add_edge(START, "chatbot")
graph_builder.add_edge("chatbot", END)

graph = graph_builder.compile()
