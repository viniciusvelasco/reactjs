import { Avatar, Box, Flex, Text } from "@chakra-ui/react";

export function Profile() {
    return (
        <Flex align="center">
            <Box mr="4" textAlign="right">
                <Text>Vinícius Velasco</Text>
                <Text color="gray.300" fontSize="small" >vinicius.velasco@live.com</Text>
            </Box>

            <Avatar size="md" name="Vinícius Velasco" src="https://github.com/viniciusvelasco.png" />
        </Flex>
    );
}