/* eslint-disable react-hooks/exhaustive-deps */

import { Box, Divider, Heading } from "@chakra-ui/react";
import {
    Card,
    Table,
    TableHead,
    TableRow,
    TableHeaderCell,
    TableBody,
    TableCell,
    Title
} from "@tremor/react";

import { useGetSubjectsQuery } from "../api/apiSlice";
import { useEffect, useState } from "react";

// let subjects = []

const QueryPage = () => {
    const { data: dataSubjects, isSuccess: isSuccessSubjects } = useGetSubjectsQuery()

    const [currentSubjects, setCurrentSubjects] = useState([])
    
    console.log(dataSubjects, isSuccessSubjects);
    useEffect(() => {
        if (isSuccessSubjects) {
            // subjects = dataSubjects.map((subject) => {
            //     subjects.push({ name: subject })
            // })
            // setCurrentSubjects(subjects)
        }
    }, [isSuccessSubjects])

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
                            {/* {currentSubjects.map((i, item) => (
                                <TableRow key={i}>
                                    <TableCell>{item.name}</TableCell>
                                </TableRow>
                            ))} */}
                        </TableBody>
                    </Table>
                </Card>
            </Box>
        </Box>
    )
};

export default QueryPage;