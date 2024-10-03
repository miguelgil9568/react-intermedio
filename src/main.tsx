import ReactDOM from 'react-dom/client'
import App from './App.tsx'
import './index.css'
import { QueryClient, QueryClientProvider } from '@tanstack/react-query'
import { ReactQueryDevtools } from '@tanstack/react-query-devtools'
import { SnackbarProvider } from "notistack";


const queryClient= new QueryClient({

});

ReactDOM.createRoot(document.getElementById('root')!).render(

        <QueryClientProvider client={queryClient}>
            <SnackbarProvider
                maxSnack={3}
                autoHideDuration={2000}
            >
                <App />
            </SnackbarProvider>
            <ReactQueryDevtools initialIsOpen={false} />
        </QueryClientProvider>
        
)
