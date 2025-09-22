import { useState } from "preact/hooks";


const FaqFeedbackModal: React.FC<FaqFeedbackModalProps> = ({ onSubmit, onClose }) => {
    const [selected, setSelected] = useState<FeedbackOption>(null);
    const [comment, setComment] = useState("");

    const handleSubmit = () => {
        onSubmit({ option: selected, comment: comment.trim() || undefined });
        if (onClose) onClose();
    };

    return (
        <div className="faq-modal-backdrop">
            <div className="faq-modal">
                <h3 className="faq-title">Did this answer your question?</h3>

                <div className="faq-options">
                    <button
                        className={`faq-btn ${selected === "yes" ? "active" : ""}`}
                        onClick={() => setSelected("yes")}
                    >
                        ✅ Yes, it helped
                    </button>
                    <button
                        className={`faq-btn ${selected === "partial" ? "active" : ""}`}
                        onClick={() => setSelected("partial")}
                    >
                        ⚠️ Partially
                    </button>
                    <button
                        className={`faq-btn ${selected === "no" ? "active" : ""}`}
                        onClick={() => setSelected("no")}
                    >
                        ❌ No, still need help
                    </button>
                </div>

                {selected === "no" && (
                    <textarea
                        className="faq-textarea"
                        placeholder="What was missing?"
                        value={comment}
                        onChange={(e) => setComment(e.currentTarget.value)}
                    />
                )}

                <div className="faq-actions">
                    <button className="faq-submit" onClick={handleSubmit} disabled={!selected}>
                        Submit
                    </button>
                    {onClose && (
                        <button className="faq-cancel" onClick={onClose}>
                            Cancel
                        </button>
                    )}
                </div>
            </div>
        </div>
    );
};

export default FaqFeedbackModal;
