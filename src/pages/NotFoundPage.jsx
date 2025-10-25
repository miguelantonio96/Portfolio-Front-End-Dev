
import { Box, Typography, Button } from '@mui/material';

export const NotFoundPage = () => {
    return (
        <Box
            className="flex flex-col items-center justify-center min-h-screen bg-gray-600"
        >
            <Typography variant="h1" className="text-7xl font-bold text-blue-600 mb-4">
                404
            </Typography>
            <Typography variant="h5" className="mb-2 text-gray-800">
                Página no encontrada
            </Typography>
            <Typography className="mb-6 text-gray-600 text-center max-w-md">
                Lo sentimos, la página que buscas no existe o ha sido movida.
            </Typography>
            <Button
                variant="contained"
                color="primary"
                href="/"
                className="shadow-md"
            >
                Volver al inicio
            </Button>
        </Box>
    );
}
