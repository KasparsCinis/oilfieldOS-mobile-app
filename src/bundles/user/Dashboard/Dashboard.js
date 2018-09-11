import React from 'react';
import { Container, Heading } from 'rebass';
import { Flex } from 'reflexbox';

const Dashboard = () => (
    <Container>
        <Flex py={3} align="center">
            <Heading level={3}>Dashboard</Heading>
        </Flex>
    </Container>
);

export default Dashboard;