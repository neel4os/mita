import { Group, Center, Button } from "@mantine/core";
import { signIn } from "../auth";

async function handleSignIn() {
  "use server";
  await signIn("keycloak");
}
export default function HomePage() {
  return (
    <Center style={{ height: "100vh" }}>
      <Group>
        <form action={handleSignIn}>
          <Button type="submit"> Sign In</Button>;
        </form>
      </Group>
    </Center>
  );
}
