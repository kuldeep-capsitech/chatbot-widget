import { useState, useEffect, useRef } from "preact/hooks";

type FeedbackOption = "yes" | "partial" | "no";

interface FaqFeedbackModalProps {
    onSubmit: (feedback: { option: FeedbackOption; comment?: string }) => void;
    onClose?: () => void;
    title?: string;
    submitLabel?: string;
    cancelLabel?: string;
}

const FaqFeedbackModal: React.FC<FaqFeedbackModalProps> = ({
    onSubmit,
    onClose,
    title = "Did this answer your question?",
    submitLabel = "Submit",
    cancelLabel = "Skip",
}) => {
    const [selected, setSelected] = useState<FeedbackOption | null>(null);
    const [comment, setComment] = useState("");
    const modalRef = useRef<HTMLDivElement>(null);
    const firstFocusableRef = useRef<HTMLButtonElement>(null);
    const lastFocusableRef = useRef<HTMLButtonElement>(null);
    const [charCount, setCharCount] = useState(0);
    const maxChars = 500;

    const handleSubmit = () => {
        if (selected) {
            onSubmit({ option: selected, comment: comment.trim() || undefined });
            if (onClose) onClose();
        }
    };

    const handleClose = () => {
        if (onClose) onClose();
    };

    const handleBackdropClick = (e: MouseEvent) => {
        if (modalRef.current && !modalRef.current.contains(e.target as Node)) {
            handleClose();
        }
    };

    const handleKeyDown = (e: KeyboardEvent) => {
        if (e.key === "Escape") {
            handleClose();
        } else if (e.key === "Tab") {
            const focusableElements = modalRef.current?.querySelectorAll(
                'button, textarea, [tabindex]:not([tabindex="-1"])'
            ) as NodeListOf<HTMLElement>;
            if (focusableElements.length > 0) {
                const first = focusableElements[0];
                const last = focusableElements[focusableElements.length - 1];
                if (e.shiftKey && document.activeElement === first) {
                    e.preventDefault();
                    last.focus();
                } else if (!e.shiftKey && document.activeElement === last) {
                    e.preventDefault();
                    first.focus();
                }
            }
        }
    };

    useEffect(() => {
        document.addEventListener("keydown", handleKeyDown);
        firstFocusableRef.current?.focus();
        return () => document.removeEventListener("keydown", handleKeyDown);
    }, []);

    useEffect(() => {
        setCharCount(comment.length);
    }, [comment]);

    const showTextarea = selected === "partial" || selected === "no";
    const textareaPlaceholder =
        selected === "partial" ? "What could be improved?" : "What was missing?";

    return (
        <div className="faq-modal-backdrop" onClick={handleBackdropClick}>
            <div
                className="faq-modal"
                ref={modalRef}
                onClick={(e) => e.stopPropagation()}
                role="dialog"
                aria-modal="true"
                aria-labelledby="faq-title-id"
            >
                <div className="faq-header">
                    <h3 className="faq-title" id="faq-title-id">
                        {title}
                    </h3>
                    {onClose && (
                        <button
                            className="faq-close-icon"
                            onClick={handleClose}
                            aria-label="Close modal"
                            ref={lastFocusableRef}
                        >
                            x
                        </button>
                    )}
                </div>

                <div className="faq-options">
                    <button
                        className={`faq-btn ${selected === "yes" ? "active" : ""}`}
                        onClick={() => setSelected("yes")}
                        aria-pressed={selected === "yes"}
                        ref={firstFocusableRef}
                    >
                        ✅ Yes, it helped
                    </button>
                    <button
                        className={`faq-btn ${selected === "partial" ? "active" : ""}`}
                        onClick={() => setSelected("partial")}
                        aria-pressed={selected === "partial"}
                    >
                        ⚠️ Partially
                    </button>
                    <button
                        className={`faq-btn ${selected === "no" ? "active" : ""}`}
                        onClick={() => setSelected("no")}
                        aria-pressed={selected === "no"}
                    >
                        ❌ No, still need help
                    </button>
                </div>

                {showTextarea && (
                    <div className="faq-textarea-wrapper">
                        <textarea
                            className="faq-textarea"
                            placeholder={textareaPlaceholder}
                            value={comment}
                            onChange={(e) => setComment(e.currentTarget.value.slice(0, maxChars))}
                            maxLength={maxChars}
                            aria-label="Additional feedback"
                        />
                        <div className="faq-char-count">
                            {charCount}/{maxChars}
                        </div>
                    </div>
                )}

                <div className="faq-actions">
                    <button
                        className="faq-submit"
                        onClick={handleSubmit}
                        disabled={!selected}
                        aria-disabled={!selected}
                    >
                        {submitLabel}
                    </button>
                    {onClose && (
                        <button className="faq-cancel" onClick={handleClose}>
                            {cancelLabel}
                        </button>
                    )}
                </div>
            </div>
        </div>
    );
};

export default FaqFeedbackModal;