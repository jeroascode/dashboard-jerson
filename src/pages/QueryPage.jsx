import { Box, Divider, Heading } from "@chakra-ui/react";
import {
    Card,
    Table,
    TableHead,
    TableRow,
    TableHeaderCell,
    TableBody,
    TableCell,
    Text,
    Title
} from "@tremor/react";

const data = [
    {
        name: "Viola Amherd",
        Role: "Federal Councillor",
        departement: "The Federal Department of Defence, Civil Protection and Sport (DDPS)",
        status: "active",
    },
    {
        name: "Simonetta Sommaruga",
        Role: "Federal Councillor",
        departement:
            "The Federal Department of the Environment, Transport, Energy and Communications (DETEC)",
        status: "active",
    },
    {
        name: "Alain Berset",
        Role: "Federal Councillor",
        departement: "The Federal Department of Home Affairs (FDHA)",
        status: "active",
    },
    {
        name: "Ignazio Cassis",
        Role: "Federal Councillor",
        departement: "The Federal Department of Foreign Affairs (FDFA)",
        status: "active",
    },
    {
        name: "Ueli Maurer",
        Role: "Federal Councillor",
        departement: "The Federal Department of Finance (FDF)",
        status: "active",
    },
    {
        name: "Guy Parmelin",
        Role: "Federal Councillor",
        departement: "The Federal Department of Economic Affairs, Education and Research (EAER)",
        status: "active",
    },
    {
        name: "Karin Keller-Sutter",
        Role: "Federal Councillor",
        departement: "The Federal Department of Justice and Police (FDJP)",
        status: "active",
    },
];


const QueryPage = () => {
    return (
        <Box w='100%' bg='white'>
            <Box w='100%' h='90px' display='flex' flexDir='column' gap={7} mt='35px' pl='35px' pr='35px'>
                <Heading fontSize='2xl' whiteSpace='nowrap'>Menu 1</Heading>
                <Divider />
            </Box>
            <Box display='flex' gap='35px' pt='0' pb='35px' pl='35px' pr='35px'>
                <Card>
                    <Title>Query 8</Title>
                    <Table className="mt-5">
                        <TableHead>
                            <TableRow>
                                <TableHeaderCell>Name</TableHeaderCell>
                                <TableHeaderCell>Position</TableHeaderCell>
                                <TableHeaderCell>Department</TableHeaderCell>
                            </TableRow>
                        </TableHead>
                        <TableBody>
                            {data.map((item) => (
                                <TableRow key={item.name}>
                                    <TableCell>{item.name}</TableCell>
                                    <TableCell>
                                        <Text>{item.Role}</Text>
                                    </TableCell>
                                    <TableCell>
                                        <Text>{item.departement}</Text>
                                    </TableCell>
                                </TableRow>
                            ))}
                        </TableBody>
                    </Table>
                </Card>
            </Box>
        </Box>
    )
};

export default QueryPage;