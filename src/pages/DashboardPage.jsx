import { Box, Link, Text } from "@chakra-ui/react";
import { Outlet } from "react-router-dom";

const MainPage = () => {
    return (
        <>
            <Box bg='white' w='100%' h='70px' display='flex' gap='75px' alignItems='center' justifyContent='center' borderBottom='solid' color='#E2E8F0' border='1px' position='fixed' top='0' zIndex='10'>
                <Text left='35px' position='fixed' color='#171923' fontSize='2xl' fontWeight='bold'>Dashboard</Text>
                <Link href="query" color='#171923' fontWeight='bold'>Consulta Principal</Link>
                <Link href="queries" color='#171923' fontWeight='bold'>Otras Consultas</Link>
            </Box>
            <Box h="100%" display="flex" flexDir="column" justifyContent="center" pt='70px'>
                <Outlet />
            </Box>
        </>
    );
};

export default MainPage;
