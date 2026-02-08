import clsx from "clsx";
import { MESSAGE_ROWS } from "@/lib/constants";
import { ContactFormModalProps } from "@/lib/definitions";

export function ContactFormModal({
    form,
    dots,
    onClose,
}: ContactFormModalProps) {
    return (
        <>
            <div className="absolute inset-0 bg-black/60" onClick={onClose} />

            <div className={clsx("contact-modal-content", "animate-fade-in")}>
                <button id="closeContactModalButton" onClick={onClose}>
                    ✕
                </button>

                <h1 className="mb-4">Let's have a chat!</h1>

                <form className="flex flex-col gap-4" onSubmit={form.handleSubmit}>
                    <div className="form-section">
                        <label>Name</label>
                        <input
                            type="text"
                            className="input-field"
                            value={form.name}
                            onChange={(event) => form.setName(event.target.value)}
                            required
                        />
                    </div>

                    <div className="form-section">
                        <label>Email</label>
                        <input
                            type="email"
                            className="input-field"
                            value={form.email}
                            onChange={(event) => form.setEmail(event.target.value)}
                            required
                        />
                    </div>

                    <div className="form-section">
                        <label>Message</label>
                        <textarea
                            rows={MESSAGE_ROWS}
                            className="input-field"
                            value={form.message}
                            onChange={(event) => form.setMessage(event.target.value)}
                            required
                        />
                    </div>

                    <button
                        type="submit"
                        disabled={form.isSending}
                        className={clsx(
                            "small-button",
                            "bg-blue-default",
                            form.isSending && "opacity-40 cursor-not-allowed"
                        )}
                    >
                        {form.isSending
                            ? `Sending message${".".repeat(dots)}`
                            : "Send message"}
                    </button>
                </form>
            </div>
        </>
    );
}

export function ContactSuccessModal({ onConfirm }: { onConfirm: () => void }) {
    return (
        <>
            <div className="absolute inset-0 bg-black/60" />

            <div className="animate-fade-in contact-modal-content">
                <h1 className="mb-4">Message sent!</h1>

                <p>
                    Thank you for your email. I’ve received it and will get back
                    to you promptly.
                </p>

                <button
                    onClick={onConfirm}
                    className="bg-blue-default mt-6 w-full small-button"
                >
                    Okay
                </button>
            </div>
        </>
    );
}
