import { Flex, Text, Button } from "@radix-ui/themes";

export default function Home() {
	return (
		<Flex direction="column" gap="3" align={"center"}>
			<Text>Hello from Radix Themes :)</Text>
			<Button variant="solid">Let's go</Button>
		</Flex>
	);
}
