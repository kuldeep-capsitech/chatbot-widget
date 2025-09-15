import { QueryClient, QueryClientProvider } from '@tanstack/react-query'
import ChatWidget from './components/chatwidget'

const App = () => {
    const queryClient = new QueryClient()
    return (
        <QueryClientProvider client={queryClient}>
            <ChatWidget />
        </QueryClientProvider>
    )
}

export default App