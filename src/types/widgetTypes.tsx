type Faq = {
    id?: string
    question: string
}

type Messages = {
    id: string
    type?: string
    text?: string
    options?: []
    time?: string
    isLoading?: boolean
}

type FeedbackOption = "yes" | "partial" | "no" | null;

interface FaqFeedbackModalProps {
    onSubmit: (feedback: { option: FeedbackOption; comment?: string }) => void;
    onClose?: () => void;
}
